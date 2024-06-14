// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unitycatalog from 'unitycatalog';
import { Response } from 'node-fetch';

const unitycatalog = new Unitycatalog({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource volumes', () => {
  test('create: only required params', async () => {
    const responsePromise = unitycatalog.volumes.create({
      catalog_name: 'main',
      name: 'my_volume',
      schema_name: 'default',
      storage_location: 'string',
      volume_type: 'EXTERNAL',
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
    const response = await unitycatalog.volumes.create({
      catalog_name: 'main',
      name: 'my_volume',
      schema_name: 'default',
      storage_location: 'string',
      volume_type: 'EXTERNAL',
      comment: 'This is my first volume',
    });
  });

  test('retrieve', async () => {
    const responsePromise = unitycatalog.volumes.retrieve('string');
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
      unitycatalog.volumes.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unitycatalog.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = unitycatalog.volumes.update('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(unitycatalog.volumes.update('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unitycatalog.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      unitycatalog.volumes.update(
        'string',
        { comment: 'x', new_name: 'my_new_volume' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unitycatalog.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = unitycatalog.volumes.list({ catalog_name: 'string', schema_name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await unitycatalog.volumes.list({
      catalog_name: 'string',
      schema_name: 'string',
      max_results: 0,
      page_token: 'string',
    });
  });

  test('delete', async () => {
    const responsePromise = unitycatalog.volumes.delete('string');
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
    await expect(unitycatalog.volumes.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unitycatalog.NotFoundError,
    );
  });
});
