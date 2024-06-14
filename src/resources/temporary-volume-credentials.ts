// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as TemporaryVolumeCredentialsAPI from './temporary-volume-credentials';

export class TemporaryVolumeCredentials extends APIResource {
  /**
   * Generate temporary volume credentials.
   */
  create(
    body: TemporaryVolumeCredentialCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateTemporaryVolumeCredentialResponse> {
    return this._client.post('/temporary-volume-credentials', { body, ...options });
  }
}

export interface GenerateTemporaryVolumeCredentialResponse {
  aws_temp_credentials?: GenerateTemporaryVolumeCredentialResponse.AwsTempCredentials;

  /**
   * Server time when the credential will expire, in epoch milliseconds. The API
   * client is advised to cache the credential given this expiration time.
   */
  expiration_time?: number;
}

export namespace GenerateTemporaryVolumeCredentialResponse {
  export interface AwsTempCredentials {
    /**
     * The access key ID that identifies the temporary credentials.
     */
    access_key_id?: string;

    /**
     * The secret access key that can be used to sign AWS API requests.
     */
    secret_access_key?: string;

    /**
     * The token that users must pass to AWS API to use the temporary credentials.
     */
    session_token?: string;
  }
}

export interface TemporaryVolumeCredentialCreateParams {
  operation: 'UNKNOWN_VOLUME_OPERATION' | 'READ_VOLUME' | 'WRITE_VOLUME';

  /**
   * Volume id for which temporary credentials are generated. Can be obtained from
   * volumes/{full_name} (get volume info) API.
   */
  volume_id: string;
}

export namespace TemporaryVolumeCredentials {
  export import GenerateTemporaryVolumeCredentialResponse = TemporaryVolumeCredentialsAPI.GenerateTemporaryVolumeCredentialResponse;
  export import TemporaryVolumeCredentialCreateParams = TemporaryVolumeCredentialsAPI.TemporaryVolumeCredentialCreateParams;
}
