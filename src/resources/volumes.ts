// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as VolumesAPI from './volumes';

export class Volumes extends APIResource {
  /**
   * Creates a new volume.
   */
  create(body: VolumeCreateParams, options?: Core.RequestOptions): Core.APIPromise<VolumeInfo> {
    return this._client.post('/volumes', { body, ...options });
  }

  /**
   * Gets a volume for a specific catalog and schema.
   */
  retrieve(name: string, options?: Core.RequestOptions): Core.APIPromise<VolumeInfo> {
    return this._client.get(`/volumes/${name}`, options);
  }

  /**
   * Updates the specified volume under the specified parent catalog and schema.
   *
   * Currently only the name or the comment of the volume could be updated.
   */
  update(name: string, body?: VolumeUpdateParams, options?: Core.RequestOptions): Core.APIPromise<VolumeInfo>;
  update(name: string, options?: Core.RequestOptions): Core.APIPromise<VolumeInfo>;
  update(
    name: string,
    body: VolumeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VolumeInfo> {
    if (isRequestOptions(body)) {
      return this.update(name, {}, body);
    }
    return this._client.patch(`/volumes/${name}`, { body, ...options });
  }

  /**
   * Gets an array of available volumes under the parent catalog and schema. There is
   * no guarantee of a specific ordering of the elements in the array.
   */
  list(query: VolumeListParams, options?: Core.RequestOptions): Core.APIPromise<VolumeListResponse> {
    return this._client.get('/volumes', { query, ...options });
  }

  /**
   * Deletes a volume from the specified parent catalog and schema.
   */
  delete(name: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/volumes/${name}`, options);
  }
}

export interface VolumeInfo {
  /**
   * The name of the catalog where the schema and the volume are
   */
  catalog_name?: string;

  /**
   * The comment attached to the volume
   */
  comment?: string;

  /**
   * Time at which this volume was created, in epoch milliseconds.
   */
  created_at?: number;

  /**
   * Full name of volume, in form of
   * **catalog_name**.**schema_name**.**volume_name**.
   */
  full_name?: string;

  /**
   * The name of the volume
   */
  name?: string;

  /**
   * The name of the schema where the volume is
   */
  schema_name?: string;

  /**
   * The storage location of the volume
   */
  storage_location?: string;

  /**
   * Time at which this volume was last modified, in epoch milliseconds.
   */
  updated_at?: number;

  /**
   * Unique identifier for the volume
   */
  volume_id?: string;

  /**
   * The type of the volume
   */
  volume_type?: 'MANAGED' | 'EXTERNAL';
}

export interface VolumeListResponse {
  /**
   * Opaque token to retrieve the next page of results. Absent if there are no more
   * pages. **page_token** should be set to this value for the next request to
   * retrieve the next page of results.
   */
  next_page_token?: string;

  volumes?: Array<VolumeInfo>;
}

export type VolumeDeleteResponse = unknown;

export interface VolumeCreateParams {
  /**
   * The name of the catalog where the schema and the volume are
   */
  catalog_name: string;

  /**
   * The name of the volume
   */
  name: string;

  /**
   * The name of the schema where the volume is
   */
  schema_name: string;

  /**
   * The storage location of the volume
   */
  storage_location: string;

  /**
   * The type of the volume
   */
  volume_type: 'MANAGED' | 'EXTERNAL';

  /**
   * The comment attached to the volume
   */
  comment?: string;
}

export interface VolumeUpdateParams {
  /**
   * The comment attached to the volume
   */
  comment?: string;

  /**
   * New name for the volume.
   */
  new_name?: string;
}

export interface VolumeListParams {
  /**
   * The identifier of the catalog
   */
  catalog_name: string;

  /**
   * The identifier of the schema
   */
  schema_name: string;

  /**
   * Maximum number of volumes to return (page length).
   *
   * If not set, the page length is set to a server configured value.
   *
   * - when set to a value greater than 0, the page length is the minimum of this
   *   value and a server configured value;
   * - when set to 0, the page length is set to a server configured value;
   * - when set to a value less than 0, an invalid parameter error is returned;
   *
   * Note: this parameter controls only the maximum number of volumes to return. The
   * actual number of volumes returned in a page may be smaller than this value,
   * including 0, even if there are more pages.
   */
  max_results?: number;

  /**
   * Opaque token returned by a previous request. It must be included in the request
   * to retrieve the next page of results (pagination).
   */
  page_token?: string;
}

export namespace Volumes {
  export import VolumeInfo = VolumesAPI.VolumeInfo;
  export import VolumeListResponse = VolumesAPI.VolumeListResponse;
  export import VolumeDeleteResponse = VolumesAPI.VolumeDeleteResponse;
  export import VolumeCreateParams = VolumesAPI.VolumeCreateParams;
  export import VolumeUpdateParams = VolumesAPI.VolumeUpdateParams;
  export import VolumeListParams = VolumesAPI.VolumeListParams;
}
