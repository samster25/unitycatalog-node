// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as TemporaryTableCredentialsAPI from './temporary-table-credentials';

export class TemporaryTableCredentials extends APIResource {
  /**
   * Generate temporary table credentials.
   */
  create(
    body: TemporaryTableCredentialCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerateTemporaryTableCredentialResponse> {
    return this._client.post('/temporary-table-credentials', { body, ...options });
  }
}

export interface GenerateTemporaryTableCredentialResponse {
  aws_temp_credentials?: GenerateTemporaryTableCredentialResponse.AwsTempCredentials;

  /**
   * Server time when the credential will expire, in epoch milliseconds. The API
   * client is advised to cache the credential given this expiration time.
   */
  expiration_time?: number;
}

export namespace GenerateTemporaryTableCredentialResponse {
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

export interface TemporaryTableCredentialCreateParams {
  operation: 'UNKNOWN_TABLE_OPERATION' | 'READ' | 'READ_WRITE';

  /**
   * Table id for which temporary credentials are generated. Can be obtained from
   * tables/{full_name} (get table info) API.
   */
  table_id: string;
}

export namespace TemporaryTableCredentials {
  export import GenerateTemporaryTableCredentialResponse = TemporaryTableCredentialsAPI.GenerateTemporaryTableCredentialResponse;
  export import TemporaryTableCredentialCreateParams = TemporaryTableCredentialsAPI.TemporaryTableCredentialCreateParams;
}
