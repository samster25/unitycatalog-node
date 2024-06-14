// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unitycatalog from 'unitycatalog';
import { Response } from 'node-fetch';

const unitycatalog = new Unitycatalog({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource temporaryTableCredentials', () => {
  test('create: only required params', async () => {
    const responsePromise = unitycatalog.temporaryTableCredentials.create({
      operation: 'UNKNOWN_TABLE_OPERATION',
      table_id: 'table_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await unitycatalog.temporaryTableCredentials.create({
      operation: 'UNKNOWN_TABLE_OPERATION',
      table_id: 'table_id',
    });
  });
});
