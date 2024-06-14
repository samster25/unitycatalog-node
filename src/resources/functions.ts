// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as FunctionsAPI from './functions';

export class Functions extends APIResource {
  /**
   * Creates a new function instance. WARNING: This API is experimental and will
   * change in future versions.
   */
  create(body: FunctionCreateParams, options?: Core.RequestOptions): Core.APIPromise<FunctionInfo> {
    return this._client.post('/functions', { body, ...options });
  }

  /**
   * Gets a function from within a parent catalog and schema.
   */
  retrieve(name: string, options?: Core.RequestOptions): Core.APIPromise<FunctionInfo> {
    return this._client.get(`/functions/${name}`, options);
  }

  /**
   * List functions within the specified parent catalog and schema. There is no
   * guarantee of a specific ordering of the elements in the array.
   */
  list(query: FunctionListParams, options?: Core.RequestOptions): Core.APIPromise<FunctionListResponse> {
    return this._client.get('/functions', { query, ...options });
  }

  /**
   * Deletes the function that matches the supplied name.
   */
  delete(name: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/functions/${name}`, options);
  }
}

export interface FunctionInfo {
  /**
   * Name of parent catalog.
   */
  catalog_name?: string;

  /**
   * User-provided free-form text description.
   */
  comment?: string;

  /**
   * Time at which this function was created, in epoch milliseconds.
   */
  created_at?: number;

  /**
   * Name of type (INT, STRUCT, MAP, etc.).
   */
  data_type?:
    | 'BOOLEAN'
    | 'BYTE'
    | 'SHORT'
    | 'INT'
    | 'LONG'
    | 'FLOAT'
    | 'DOUBLE'
    | 'DATE'
    | 'TIMESTAMP'
    | 'TIMESTAMP_NTZ'
    | 'STRING'
    | 'BINARY'
    | 'DECIMAL'
    | 'INTERVAL'
    | 'ARRAY'
    | 'STRUCT'
    | 'MAP'
    | 'CHAR'
    | 'NULL'
    | 'USER_DEFINED_TYPE'
    | 'TABLE_TYPE';

  /**
   * External language of the function.
   */
  external_language?: string;

  /**
   * Pretty printed function data type.
   */
  full_data_type?: string;

  /**
   * Full name of function, in form of
   * **catalog_name**.**schema_name**.**function**name\_\_
   */
  full_name?: string;

  /**
   * Id of Function, relative to parent schema.
   */
  function_id?: string;

  input_params?: FunctionInfo.InputParams;

  /**
   * Whether the function is deterministic.
   */
  is_deterministic?: boolean;

  /**
   * Function null call.
   */
  is_null_call?: boolean;

  /**
   * Name of function, relative to parent schema.
   */
  name?: string;

  /**
   * Function parameter style. **S** is the value for SQL.
   */
  parameter_style?: 'S';

  /**
   * JSON-serialized key-value pair map, encoded (escaped) as a string.
   */
  properties?: string;

  return_params?: FunctionInfo.ReturnParams;

  /**
   * Function language. When **EXTERNAL** is used, the language of the routine
   * function should be specified in the **external_language** field, and the
   * **return_params** of the function cannot be used (as **TABLE** return type is
   * not supported), and the **sql_data_access** field must be **NO_SQL**.
   */
  routine_body?: 'SQL' | 'EXTERNAL';

  /**
   * Function body.
   */
  routine_definition?: string;

  /**
   * A list of dependencies.
   */
  routine_dependencies?: FunctionInfo.RoutineDependencies;

  /**
   * Name of parent schema relative to its parent catalog.
   */
  schema_name?: string;

  /**
   * Function security type.
   */
  security_type?: 'DEFINER';

  /**
   * Specific name of the function; Reserved for future use.
   */
  specific_name?: string;

  /**
   * Function SQL data access.
   */
  sql_data_access?: 'CONTAINS_SQL' | 'READS_SQL_DATA' | 'NO_SQL';

  /**
   * Time at which this function was last updated, in epoch milliseconds.
   */
  updated_at?: number;
}

export namespace FunctionInfo {
  export interface InputParams {
    /**
     * The array of **FunctionParameterInfo** definitions of the function's parameters.
     */
    parameters?: Array<InputParams.Parameter>;
  }

  export namespace InputParams {
    export interface Parameter {
      /**
       * Name of parameter.
       */
      name: string;

      /**
       * Ordinal position of column (starting at position 0).
       */
      position: number;

      /**
       * Full data type spec, JSON-serialized.
       */
      type_json: string;

      /**
       * Name of type (INT, STRUCT, MAP, etc.).
       */
      type_name:
        | 'BOOLEAN'
        | 'BYTE'
        | 'SHORT'
        | 'INT'
        | 'LONG'
        | 'FLOAT'
        | 'DOUBLE'
        | 'DATE'
        | 'TIMESTAMP'
        | 'TIMESTAMP_NTZ'
        | 'STRING'
        | 'BINARY'
        | 'DECIMAL'
        | 'INTERVAL'
        | 'ARRAY'
        | 'STRUCT'
        | 'MAP'
        | 'CHAR'
        | 'NULL'
        | 'USER_DEFINED_TYPE'
        | 'TABLE_TYPE';

      /**
       * Full data type spec, SQL/catalogString text.
       */
      type_text: string;

      /**
       * User-provided free-form text description.
       */
      comment?: string;

      /**
       * Default value of the parameter.
       */
      parameter_default?: string;

      /**
       * The mode of the function parameter.
       */
      parameter_mode?: 'IN';

      /**
       * The type of function parameter.
       */
      parameter_type?: 'PARAM' | 'COLUMN';

      /**
       * Format of IntervalType.
       */
      type_interval_type?: string;

      /**
       * Digits of precision; required on Create for DecimalTypes.
       */
      type_precision?: number;

      /**
       * Digits to right of decimal; Required on Create for DecimalTypes.
       */
      type_scale?: number;
    }
  }

  export interface ReturnParams {
    /**
     * The array of **FunctionParameterInfo** definitions of the function's parameters.
     */
    parameters?: Array<ReturnParams.Parameter>;
  }

  export namespace ReturnParams {
    export interface Parameter {
      /**
       * Name of parameter.
       */
      name: string;

      /**
       * Ordinal position of column (starting at position 0).
       */
      position: number;

      /**
       * Full data type spec, JSON-serialized.
       */
      type_json: string;

      /**
       * Name of type (INT, STRUCT, MAP, etc.).
       */
      type_name:
        | 'BOOLEAN'
        | 'BYTE'
        | 'SHORT'
        | 'INT'
        | 'LONG'
        | 'FLOAT'
        | 'DOUBLE'
        | 'DATE'
        | 'TIMESTAMP'
        | 'TIMESTAMP_NTZ'
        | 'STRING'
        | 'BINARY'
        | 'DECIMAL'
        | 'INTERVAL'
        | 'ARRAY'
        | 'STRUCT'
        | 'MAP'
        | 'CHAR'
        | 'NULL'
        | 'USER_DEFINED_TYPE'
        | 'TABLE_TYPE';

      /**
       * Full data type spec, SQL/catalogString text.
       */
      type_text: string;

      /**
       * User-provided free-form text description.
       */
      comment?: string;

      /**
       * Default value of the parameter.
       */
      parameter_default?: string;

      /**
       * The mode of the function parameter.
       */
      parameter_mode?: 'IN';

      /**
       * The type of function parameter.
       */
      parameter_type?: 'PARAM' | 'COLUMN';

      /**
       * Format of IntervalType.
       */
      type_interval_type?: string;

      /**
       * Digits of precision; required on Create for DecimalTypes.
       */
      type_precision?: number;

      /**
       * Digits to right of decimal; Required on Create for DecimalTypes.
       */
      type_scale?: number;
    }
  }

  /**
   * A list of dependencies.
   */
  export interface RoutineDependencies {
    /**
     * Array of dependencies.
     */
    dependencies?: Array<RoutineDependencies.Dependency>;
  }

  export namespace RoutineDependencies {
    /**
     * A dependency of a SQL object. Either the **table** field or the **function**
     * field must be defined.
     */
    export interface Dependency {
      /**
       * A function that is dependent on a SQL object.
       */
      function?: Dependency.Function;

      /**
       * A table that is dependent on a SQL object.
       */
      table?: Dependency.Table;
    }

    export namespace Dependency {
      /**
       * A function that is dependent on a SQL object.
       */
      export interface Function {
        /**
         * Full name of the dependent function, in the form of
         * **catalog_name**.**schema_name**.**function_name**.
         */
        function_full_name: string;
      }

      /**
       * A table that is dependent on a SQL object.
       */
      export interface Table {
        /**
         * Full name of the dependent table, in the form of
         * **catalog_name**.**schema_name**.**table_name**.
         */
        table_full_name: string;
      }
    }
  }
}

export interface FunctionListResponse {
  /**
   * An array of function information objects.
   */
  functions?: Array<FunctionInfo>;

  /**
   * Opaque token to retrieve the next page of results. Absent if there are no more
   * pages. **page_token** should be set to this value for the next request (for the
   * next page of results).
   */
  next_page_token?: string;
}

export type FunctionDeleteResponse = unknown;

export interface FunctionCreateParams {
  function_info: FunctionCreateParams.FunctionInfo;
}

export namespace FunctionCreateParams {
  export interface FunctionInfo {
    /**
     * Name of parent catalog.
     */
    catalog_name: string;

    /**
     * Name of type (INT, STRUCT, MAP, etc.).
     */
    data_type:
      | 'BOOLEAN'
      | 'BYTE'
      | 'SHORT'
      | 'INT'
      | 'LONG'
      | 'FLOAT'
      | 'DOUBLE'
      | 'DATE'
      | 'TIMESTAMP'
      | 'TIMESTAMP_NTZ'
      | 'STRING'
      | 'BINARY'
      | 'DECIMAL'
      | 'INTERVAL'
      | 'ARRAY'
      | 'STRUCT'
      | 'MAP'
      | 'CHAR'
      | 'NULL'
      | 'USER_DEFINED_TYPE'
      | 'TABLE_TYPE';

    /**
     * Pretty printed function data type.
     */
    full_data_type: string;

    input_params: FunctionInfo.InputParams;

    /**
     * Whether the function is deterministic.
     */
    is_deterministic: boolean;

    /**
     * Function null call.
     */
    is_null_call: boolean;

    /**
     * Name of function, relative to parent schema.
     */
    name: string;

    /**
     * Function parameter style. **S** is the value for SQL.
     */
    parameter_style: 'S';

    /**
     * JSON-serialized key-value pair map, encoded (escaped) as a string.
     */
    properties: string;

    /**
     * Function language. When **EXTERNAL** is used, the language of the routine
     * function should be specified in the **external_language** field, and the
     * **return_params** of the function cannot be used (as **TABLE** return type is
     * not supported), and the **sql_data_access** field must be **NO_SQL**.
     */
    routine_body: 'SQL' | 'EXTERNAL';

    /**
     * Function body.
     */
    routine_definition: string;

    /**
     * Name of parent schema relative to its parent catalog.
     */
    schema_name: string;

    /**
     * Function security type.
     */
    security_type: 'DEFINER';

    /**
     * Specific name of the function; Reserved for future use.
     */
    specific_name: string;

    /**
     * Function SQL data access.
     */
    sql_data_access: 'CONTAINS_SQL' | 'READS_SQL_DATA' | 'NO_SQL';

    /**
     * User-provided free-form text description.
     */
    comment?: string;

    /**
     * External language of the function.
     */
    external_language?: string;

    return_params?: FunctionInfo.ReturnParams;

    /**
     * A list of dependencies.
     */
    routine_dependencies?: FunctionInfo.RoutineDependencies;
  }

  export namespace FunctionInfo {
    export interface InputParams {
      /**
       * The array of **FunctionParameterInfo** definitions of the function's parameters.
       */
      parameters?: Array<InputParams.Parameter>;
    }

    export namespace InputParams {
      export interface Parameter {
        /**
         * Name of parameter.
         */
        name: string;

        /**
         * Ordinal position of column (starting at position 0).
         */
        position: number;

        /**
         * Full data type spec, JSON-serialized.
         */
        type_json: string;

        /**
         * Name of type (INT, STRUCT, MAP, etc.).
         */
        type_name:
          | 'BOOLEAN'
          | 'BYTE'
          | 'SHORT'
          | 'INT'
          | 'LONG'
          | 'FLOAT'
          | 'DOUBLE'
          | 'DATE'
          | 'TIMESTAMP'
          | 'TIMESTAMP_NTZ'
          | 'STRING'
          | 'BINARY'
          | 'DECIMAL'
          | 'INTERVAL'
          | 'ARRAY'
          | 'STRUCT'
          | 'MAP'
          | 'CHAR'
          | 'NULL'
          | 'USER_DEFINED_TYPE'
          | 'TABLE_TYPE';

        /**
         * Full data type spec, SQL/catalogString text.
         */
        type_text: string;

        /**
         * User-provided free-form text description.
         */
        comment?: string;

        /**
         * Default value of the parameter.
         */
        parameter_default?: string;

        /**
         * The mode of the function parameter.
         */
        parameter_mode?: 'IN';

        /**
         * The type of function parameter.
         */
        parameter_type?: 'PARAM' | 'COLUMN';

        /**
         * Format of IntervalType.
         */
        type_interval_type?: string;

        /**
         * Digits of precision; required on Create for DecimalTypes.
         */
        type_precision?: number;

        /**
         * Digits to right of decimal; Required on Create for DecimalTypes.
         */
        type_scale?: number;
      }
    }

    export interface ReturnParams {
      /**
       * The array of **FunctionParameterInfo** definitions of the function's parameters.
       */
      parameters?: Array<ReturnParams.Parameter>;
    }

    export namespace ReturnParams {
      export interface Parameter {
        /**
         * Name of parameter.
         */
        name: string;

        /**
         * Ordinal position of column (starting at position 0).
         */
        position: number;

        /**
         * Full data type spec, JSON-serialized.
         */
        type_json: string;

        /**
         * Name of type (INT, STRUCT, MAP, etc.).
         */
        type_name:
          | 'BOOLEAN'
          | 'BYTE'
          | 'SHORT'
          | 'INT'
          | 'LONG'
          | 'FLOAT'
          | 'DOUBLE'
          | 'DATE'
          | 'TIMESTAMP'
          | 'TIMESTAMP_NTZ'
          | 'STRING'
          | 'BINARY'
          | 'DECIMAL'
          | 'INTERVAL'
          | 'ARRAY'
          | 'STRUCT'
          | 'MAP'
          | 'CHAR'
          | 'NULL'
          | 'USER_DEFINED_TYPE'
          | 'TABLE_TYPE';

        /**
         * Full data type spec, SQL/catalogString text.
         */
        type_text: string;

        /**
         * User-provided free-form text description.
         */
        comment?: string;

        /**
         * Default value of the parameter.
         */
        parameter_default?: string;

        /**
         * The mode of the function parameter.
         */
        parameter_mode?: 'IN';

        /**
         * The type of function parameter.
         */
        parameter_type?: 'PARAM' | 'COLUMN';

        /**
         * Format of IntervalType.
         */
        type_interval_type?: string;

        /**
         * Digits of precision; required on Create for DecimalTypes.
         */
        type_precision?: number;

        /**
         * Digits to right of decimal; Required on Create for DecimalTypes.
         */
        type_scale?: number;
      }
    }

    /**
     * A list of dependencies.
     */
    export interface RoutineDependencies {
      /**
       * Array of dependencies.
       */
      dependencies?: Array<RoutineDependencies.Dependency>;
    }

    export namespace RoutineDependencies {
      /**
       * A dependency of a SQL object. Either the **table** field or the **function**
       * field must be defined.
       */
      export interface Dependency {
        /**
         * A function that is dependent on a SQL object.
         */
        function?: Dependency.Function;

        /**
         * A table that is dependent on a SQL object.
         */
        table?: Dependency.Table;
      }

      export namespace Dependency {
        /**
         * A function that is dependent on a SQL object.
         */
        export interface Function {
          /**
           * Full name of the dependent function, in the form of
           * **catalog_name**.**schema_name**.**function_name**.
           */
          function_full_name: string;
        }

        /**
         * A table that is dependent on a SQL object.
         */
        export interface Table {
          /**
           * Full name of the dependent table, in the form of
           * **catalog_name**.**schema_name**.**table_name**.
           */
          table_full_name: string;
        }
      }
    }
  }
}

export interface FunctionListParams {
  /**
   * Name of parent catalog for functions of interest.
   */
  catalog_name: string;

  /**
   * Parent schema of functions.
   */
  schema_name: string;

  /**
   * Maximum number of functions to return.
   *
   * - when set to a value greater than 0, the page length is the minimum of this
   *   value and a server configured value;
   * - when set to 0, the page length is set to a server configured value;
   * - when set to a value less than 0, an invalid parameter error is returned;
   */
  max_results?: number;

  /**
   * Opaque pagination token to go to next page based on previous query.
   */
  page_token?: string;
}

export namespace Functions {
  export import FunctionInfo = FunctionsAPI.FunctionInfo;
  export import FunctionListResponse = FunctionsAPI.FunctionListResponse;
  export import FunctionDeleteResponse = FunctionsAPI.FunctionDeleteResponse;
  export import FunctionCreateParams = FunctionsAPI.FunctionCreateParams;
  export import FunctionListParams = FunctionsAPI.FunctionListParams;
}
