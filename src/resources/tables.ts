// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as TablesAPI from './tables';

export class Tables extends APIResource {
  /**
   * Creates a new table instance. WARNING: This API is experimental and will change
   * in future versions.
   */
  create(body: TableCreateParams, options?: Core.RequestOptions): Core.APIPromise<TableInfo> {
    return this._client.post('/tables', { body, ...options });
  }

  /**
   * Gets a table for a specific catalog and schema.
   */
  retrieve(fullName: string, options?: Core.RequestOptions): Core.APIPromise<TableInfo> {
    return this._client.get(`/tables/${fullName}`, options);
  }

  /**
   * Gets the list of all available tables under the parent catalog and schema. There
   * is no guarantee of a specific ordering of the elements in the array.
   */
  list(query: TableListParams, options?: Core.RequestOptions): Core.APIPromise<TableListResponse> {
    return this._client.get('/tables', { query, ...options });
  }

  /**
   * Deletes a table from the specified parent catalog and schema.
   */
  delete(fullName: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/tables/${fullName}`, options);
  }
}

export interface TableInfo {
  /**
   * Name of parent catalog.
   */
  catalog_name?: string;

  /**
   * The array of **ColumnInfo** definitions of the table's columns.
   */
  columns?: Array<TableInfo.Column>;

  /**
   * User-provided free-form text description.
   */
  comment?: string;

  /**
   * Time at which this table was created, in epoch milliseconds.
   */
  created_at?: number;

  /**
   * Data source format
   */
  data_source_format?: 'DELTA' | 'CSV' | 'JSON' | 'AVRO' | 'PARQUET' | 'ORC' | 'TEXT';

  /**
   * Name of table, relative to parent schema.
   */
  name?: string;

  /**
   * A map of key-value properties attached to the securable.
   */
  properties?: Record<string, string>;

  /**
   * Name of parent schema relative to its parent catalog.
   */
  schema_name?: string;

  /**
   * Storage root URL for table (for **MANAGED**, **EXTERNAL** tables)
   */
  storage_location?: string;

  /**
   * Unique identifier for the table.
   */
  table_id?: string;

  table_type?: 'MANAGED' | 'EXTERNAL';

  /**
   * Time at which this table was last modified, in epoch milliseconds.
   */
  updated_at?: number;
}

export namespace TableInfo {
  export interface Column {
    /**
     * User-provided free-form text description.
     */
    comment?: string;

    /**
     * Name of Column.
     */
    name?: string;

    /**
     * Whether field may be Null.
     */
    nullable?: boolean;

    /**
     * Partition index for column.
     */
    partition_index?: number;

    /**
     * Ordinal position of column (starting at position 0).
     */
    position?: number;

    /**
     * Format of IntervalType.
     */
    type_interval_type?: string;

    /**
     * Full data type specification, JSON-serialized.
     */
    type_json?: string;

    /**
     * Name of type (INT, STRUCT, MAP, etc.).
     */
    type_name?:
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
     * Digits of precision; required for DecimalTypes.
     */
    type_precision?: number;

    /**
     * Digits to right of decimal; Required for DecimalTypes.
     */
    type_scale?: number;

    /**
     * Full data type specification as SQL/catalogString text.
     */
    type_text?: string;
  }
}

export interface TableListResponse {
  /**
   * Opaque token to retrieve the next page of results. Absent if there are no more
   * pages. **page_token** should be set to this value for the next request (for the
   * next page of results).
   */
  next_page_token?: string;

  /**
   * An array of table information objects.
   */
  tables?: Array<TableInfo>;
}

export type TableDeleteResponse = unknown;

export interface TableCreateParams {
  /**
   * Name of parent catalog.
   */
  catalog_name: string;

  /**
   * The array of **ColumnInfo** definitions of the table's columns.
   */
  columns: Array<TableCreateParams.Column>;

  /**
   * Data source format
   */
  data_source_format: 'DELTA' | 'CSV' | 'JSON' | 'AVRO' | 'PARQUET' | 'ORC' | 'TEXT';

  /**
   * Name of table, relative to parent schema.
   */
  name: string;

  /**
   * Name of parent schema relative to its parent catalog.
   */
  schema_name: string;

  table_type: 'MANAGED' | 'EXTERNAL';

  /**
   * User-provided free-form text description.
   */
  comment?: string;

  /**
   * A map of key-value properties attached to the securable.
   */
  properties?: Record<string, string>;

  /**
   * Storage root URL for table (for **MANAGED**, **EXTERNAL** tables)
   */
  storage_location?: string;
}

export namespace TableCreateParams {
  export interface Column {
    /**
     * User-provided free-form text description.
     */
    comment?: string;

    /**
     * Name of Column.
     */
    name?: string;

    /**
     * Whether field may be Null.
     */
    nullable?: boolean;

    /**
     * Partition index for column.
     */
    partition_index?: number;

    /**
     * Ordinal position of column (starting at position 0).
     */
    position?: number;

    /**
     * Format of IntervalType.
     */
    type_interval_type?: string;

    /**
     * Full data type specification, JSON-serialized.
     */
    type_json?: string;

    /**
     * Name of type (INT, STRUCT, MAP, etc.).
     */
    type_name?:
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
     * Digits of precision; required for DecimalTypes.
     */
    type_precision?: number;

    /**
     * Digits to right of decimal; Required for DecimalTypes.
     */
    type_scale?: number;

    /**
     * Full data type specification as SQL/catalogString text.
     */
    type_text?: string;
  }
}

export interface TableListParams {
  /**
   * Name of parent catalog for tables of interest.
   */
  catalog_name: string;

  /**
   * Parent schema of tables.
   */
  schema_name: string;

  /**
   * Maximum number of tables to return.
   *
   * - when set to a value greater than 0, the page length is the minimum of this
   *   value and a server configured value;
   * - when set to 0, the page length is set to a server configured value;
   * - when set to a value less than 0, an invalid parameter error is returned;
   */
  max_results?: number;

  /**
   * Opaque token to send for the next page of results (pagination).
   */
  page_token?: string;
}

export namespace Tables {
  export import TableInfo = TablesAPI.TableInfo;
  export import TableListResponse = TablesAPI.TableListResponse;
  export import TableDeleteResponse = TablesAPI.TableDeleteResponse;
  export import TableCreateParams = TablesAPI.TableCreateParams;
  export import TableListParams = TablesAPI.TableListParams;
}
