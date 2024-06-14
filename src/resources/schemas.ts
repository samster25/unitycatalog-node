// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as SchemasAPI from './schemas';

export class Schemas extends APIResource {
  /**
   * Creates a new schema in the specified catalog.
   */
  create(body: SchemaCreateParams, options?: Core.RequestOptions): Core.APIPromise<SchemaInfo> {
    return this._client.post('/schemas', { body, ...options });
  }

  /**
   * Gets the specified schema for a catalog.
   */
  retrieve(fullName: string, options?: Core.RequestOptions): Core.APIPromise<SchemaInfo> {
    return this._client.get(`/schemas/${fullName}`, options);
  }

  /**
   * Updates the specified schema.
   */
  update(
    fullName: string,
    body?: SchemaUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaInfo>;
  update(fullName: string, options?: Core.RequestOptions): Core.APIPromise<SchemaInfo>;
  update(
    fullName: string,
    body: SchemaUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaInfo> {
    if (isRequestOptions(body)) {
      return this.update(fullName, {}, body);
    }
    return this._client.patch(`/schemas/${fullName}`, { body, ...options });
  }

  /**
   * Gets an array of schemas for a catalog. There is no guarantee of a specific
   * ordering of the elements in the array.
   */
  list(query: SchemaListParams, options?: Core.RequestOptions): Core.APIPromise<SchemaListResponse> {
    return this._client.get('/schemas', { query, ...options });
  }

  /**
   * Deletes the specified schema from the parent catalog.
   */
  delete(fullName: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/schemas/${fullName}`, options);
  }
}

export interface SchemaInfo {
  /**
   * Name of parent catalog.
   */
  catalog_name?: string;

  /**
   * User-provided free-form text description.
   */
  comment?: string;

  /**
   * Time at which this schema was created, in epoch milliseconds.
   */
  created_at?: number;

  /**
   * Full name of schema, in form of **catalog_name**.**schema_name**.
   */
  full_name?: string;

  /**
   * Name of schema, relative to parent catalog.
   */
  name?: string;

  /**
   * A map of key-value properties attached to the securable.
   */
  properties?: Record<string, string>;

  /**
   * Unique identifier for the schema.
   */
  schema_id?: string;

  /**
   * Time at which this schema was last modified, in epoch milliseconds.
   */
  updated_at?: number;
}

export interface SchemaListResponse {
  /**
   * Opaque token to retrieve the next page of results. Absent if there are no more
   * pages. **page_token** should be set to this value for the next request (for the
   * next page of results).
   */
  next_page_token?: string;

  /**
   * An array of schema information objects.
   */
  schemas?: Array<SchemaInfo>;
}

export type SchemaDeleteResponse = unknown;

export interface SchemaCreateParams {
  /**
   * Name of parent catalog.
   */
  catalog_name: string;

  /**
   * Name of schema, relative to parent catalog.
   */
  name: string;

  /**
   * User-provided free-form text description.
   */
  comment?: string;

  /**
   * A map of key-value properties attached to the securable.
   */
  properties?: Record<string, string>;
}

export interface SchemaUpdateParams {
  /**
   * User-provided free-form text description.
   */
  comment?: string;

  /**
   * New name for the schema.
   */
  new_name?: string;

  /**
   * A map of key-value properties attached to the securable.
   */
  properties?: Record<string, string>;
}

export interface SchemaListParams {
  /**
   * Parent catalog for schemas of interest.
   */
  catalog_name: string;

  /**
   * Maximum number of schemas to return.
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

export namespace Schemas {
  export import SchemaInfo = SchemasAPI.SchemaInfo;
  export import SchemaListResponse = SchemasAPI.SchemaListResponse;
  export import SchemaDeleteResponse = SchemasAPI.SchemaDeleteResponse;
  export import SchemaCreateParams = SchemasAPI.SchemaCreateParams;
  export import SchemaUpdateParams = SchemasAPI.SchemaUpdateParams;
  export import SchemaListParams = SchemasAPI.SchemaListParams;
}
