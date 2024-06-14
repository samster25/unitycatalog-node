// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['UNITYCATALOG_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Unitycatalog API. */
export class Unitycatalog extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Unitycatalog API.
   *
   * @param {string} [opts.baseURL=process.env['UNITYCATALOG_BASE_URL'] ?? http://localhost:8080/api/2.1/unity-catalog] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('UNITYCATALOG_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `http://localhost:8080/api/2.1/unity-catalog`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;
  }

  catalogs: API.Catalogs = new API.Catalogs(this);
  schemas: API.Schemas = new API.Schemas(this);
  tables: API.Tables = new API.Tables(this);
  volumes: API.Volumes = new API.Volumes(this);
  temporaryTableCredentials: API.TemporaryTableCredentials = new API.TemporaryTableCredentials(this);
  temporaryVolumeCredentials: API.TemporaryVolumeCredentials = new API.TemporaryVolumeCredentials(this);
  functions: API.Functions = new API.Functions(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static Unitycatalog = this;

  static UnitycatalogError = Errors.UnitycatalogError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  UnitycatalogError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Unitycatalog {
  export import RequestOptions = Core.RequestOptions;

  export import Catalogs = API.Catalogs;
  export import CatalogInfo = API.CatalogInfo;
  export import CatalogListResponse = API.CatalogListResponse;
  export import CatalogDeleteResponse = API.CatalogDeleteResponse;
  export import CatalogCreateParams = API.CatalogCreateParams;
  export import CatalogUpdateParams = API.CatalogUpdateParams;
  export import CatalogListParams = API.CatalogListParams;
  export import CatalogDeleteParams = API.CatalogDeleteParams;

  export import Schemas = API.Schemas;
  export import SchemaInfo = API.SchemaInfo;
  export import SchemaListResponse = API.SchemaListResponse;
  export import SchemaDeleteResponse = API.SchemaDeleteResponse;
  export import SchemaCreateParams = API.SchemaCreateParams;
  export import SchemaUpdateParams = API.SchemaUpdateParams;
  export import SchemaListParams = API.SchemaListParams;

  export import Tables = API.Tables;
  export import TableInfo = API.TableInfo;
  export import TableListResponse = API.TableListResponse;
  export import TableDeleteResponse = API.TableDeleteResponse;
  export import TableCreateParams = API.TableCreateParams;
  export import TableListParams = API.TableListParams;

  export import Volumes = API.Volumes;
  export import VolumeInfo = API.VolumeInfo;
  export import VolumeListResponse = API.VolumeListResponse;
  export import VolumeDeleteResponse = API.VolumeDeleteResponse;
  export import VolumeCreateParams = API.VolumeCreateParams;
  export import VolumeUpdateParams = API.VolumeUpdateParams;
  export import VolumeListParams = API.VolumeListParams;

  export import TemporaryTableCredentials = API.TemporaryTableCredentials;
  export import GenerateTemporaryTableCredentialResponse = API.GenerateTemporaryTableCredentialResponse;
  export import TemporaryTableCredentialCreateParams = API.TemporaryTableCredentialCreateParams;

  export import TemporaryVolumeCredentials = API.TemporaryVolumeCredentials;
  export import GenerateTemporaryVolumeCredentialResponse = API.GenerateTemporaryVolumeCredentialResponse;
  export import TemporaryVolumeCredentialCreateParams = API.TemporaryVolumeCredentialCreateParams;

  export import Functions = API.Functions;
  export import FunctionInfo = API.FunctionInfo;
  export import FunctionListResponse = API.FunctionListResponse;
  export import FunctionDeleteResponse = API.FunctionDeleteResponse;
  export import FunctionCreateParams = API.FunctionCreateParams;
  export import FunctionListParams = API.FunctionListParams;
}

export default Unitycatalog;
