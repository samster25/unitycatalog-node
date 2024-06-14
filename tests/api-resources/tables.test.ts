// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unitycatalog from 'unitycatalog';
import { Response } from 'node-fetch';

const unitycatalog = new Unitycatalog({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tables', () => {
  test('create: only required params', async () => {
    const responsePromise = unitycatalog.tables.create({
      catalog_name: 'string',
      columns: [{}, {}, {}],
      data_source_format: 'DELTA',
      name: 'string',
      schema_name: 'string',
      table_type: 'MANAGED',
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
    const response = await unitycatalog.tables.create({
      catalog_name: 'string',
      columns: [
        {
          name: 'string',
          type_text: 'string',
          type_json: 'string',
          type_name: 'BOOLEAN',
          type_precision: 0,
          type_scale: 0,
          type_interval_type: 'string',
          position: 0,
          comment: 'string',
          nullable: true,
          partition_index: 0,
        },
        {
          name: 'string',
          type_text: 'string',
          type_json: 'string',
          type_name: 'BOOLEAN',
          type_precision: 0,
          type_scale: 0,
          type_interval_type: 'string',
          position: 0,
          comment: 'string',
          nullable: true,
          partition_index: 0,
        },
        {
          name: 'string',
          type_text: 'string',
          type_json: 'string',
          type_name: 'BOOLEAN',
          type_precision: 0,
          type_scale: 0,
          type_interval_type: 'string',
          position: 0,
          comment: 'string',
          nullable: true,
          partition_index: 0,
        },
      ],
      data_source_format: 'DELTA',
      name: 'string',
      schema_name: 'string',
      table_type: 'MANAGED',
      comment: 'string',
      properties: { foo: 'string' },
      storage_location: 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = unitycatalog.tables.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      unitycatalog.tables.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unitycatalog.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = unitycatalog.tables.list({ catalog_name: 'string', schema_name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await unitycatalog.tables.list({
      catalog_name: 'string',
      schema_name: 'string',
      max_results: 0,
      page_token: 'string',
    });
  });

  test('delete', async () => {
    const responsePromise = unitycatalog.tables.delete('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(unitycatalog.tables.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unitycatalog.NotFoundError,
    );
  });
});
