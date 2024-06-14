// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as CatalogsAPI from './catalogs';

export class Catalogs extends APIResource {
  /**
   * Creates a new catalog instance.
   */
  create(body: CatalogCreateParams, options?: Core.RequestOptions): Core.APIPromise<CatalogInfo> {
    return this._client.post('/catalogs', { body, ...options });
  }

  /**
   * Gets the specified catalog.
   */
  retrieve(name: string, options?: Core.RequestOptions): Core.APIPromise<CatalogInfo> {
    return this._client.get(`/catalogs/${name}`, options);
  }

  /**
   * Updates the catalog that matches the supplied name.
   */
  update(
    name: string,
    body?: CatalogUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatalogInfo>;
  update(name: string, options?: Core.RequestOptions): Core.APIPromise<CatalogInfo>;
  update(
    name: string,
    body: CatalogUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatalogInfo> {
    if (isRequestOptions(body)) {
      return this.update(name, {}, body);
    }
    return this._client.patch(`/catalogs/${name}`, { body, ...options });
  }

  /**
   * Lists the available catalogs. There is no guarantee of a specific ordering of
   * the elements in the list.
   */
  list(query?: CatalogListParams, options?: Core.RequestOptions): Core.APIPromise<CatalogListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CatalogListResponse>;
  list(
    query: CatalogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatalogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/catalogs', { query, ...options });
  }

  /**
   * Deletes the catalog that matches the supplied name.
   */
  delete(name: string, params?: CatalogDeleteParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  delete(name: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  delete(
    name: string,
    params: CatalogDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.delete(name, {}, params);
    }
    const { force } = params;
    return this._client.delete(`/catalogs/${name}`, { query: { force }, ...options });
  }
}

export interface CatalogInfo {
  /**
   * Unique identifier for the catalog.
   */
  id?: string;

  /**
   * User-provided free-form text description.
   */
  comment?: string;

  /**
   * Time at which this catalog was created, in epoch milliseconds.
   */
  created_at?: number;

  /**
   * Name of catalog.
   */
  name?: string;

  /**
   * A map of key-value properties attached to the securable.
   */
  properties?: Record<string, string>;

  /**
   * Time at which this catalog was last modified, in epoch milliseconds.
   */
  updated_at?: number;
}

export interface CatalogListResponse {
  /**
   * An array of catalog information objects.
   */
  catalogs?: Array<CatalogInfo>;

  /**
   * Opaque token to retrieve the next page of results. Absent if there are no more
   * pages. **page_token** should be set to this value for the next request (for the
   * next page of results).
   */
  next_page_token?: string;
}

export type CatalogDeleteResponse = unknown;

export interface CatalogCreateParams {
  /**
   * Name of catalog.
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

export interface CatalogUpdateParams {
  /**
   * User-provided free-form text description.
   */
  comment?: string;

  /**
   * New name for the catalog.
   */
  new_name?: string;

  /**
   * A map of key-value properties attached to the securable.
   */
  properties?: Record<string, string>;
}

export interface CatalogListParams {
  /**
   * Maximum number of catalogs to return.
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

export interface CatalogDeleteParams {
  /**
   * Force deletion even if the catalog is not empty.
   */
  force?: boolean;
}

export namespace Catalogs {
  export import CatalogInfo = CatalogsAPI.CatalogInfo;
  export import CatalogListResponse = CatalogsAPI.CatalogListResponse;
  export import CatalogDeleteResponse = CatalogsAPI.CatalogDeleteResponse;
  export import CatalogCreateParams = CatalogsAPI.CatalogCreateParams;
  export import CatalogUpdateParams = CatalogsAPI.CatalogUpdateParams;
  export import CatalogListParams = CatalogsAPI.CatalogListParams;
  export import CatalogDeleteParams = CatalogsAPI.CatalogDeleteParams;
}
