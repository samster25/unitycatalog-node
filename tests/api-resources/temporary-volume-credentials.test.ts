// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unitycatalog from 'unitycatalog';
import { Response } from 'node-fetch';

const unitycatalog = new Unitycatalog({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource temporaryVolumeCredentials', () => {
  test('create: only required params', async () => {
    const responsePromise = unitycatalog.temporaryVolumeCredentials.create({
      operation: 'UNKNOWN_VOLUME_OPERATION',
      volume_id: 'string',
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
    const response = await unitycatalog.temporaryVolumeCredentials.create({
      operation: 'UNKNOWN_VOLUME_OPERATION',
      volume_id: 'string',
    });
  });
});
