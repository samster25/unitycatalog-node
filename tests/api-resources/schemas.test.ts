// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unitycatalog from 'unitycatalog';
import { Response } from 'node-fetch';

const unitycatalog = new Unitycatalog({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schemas', () => {
  test('create: only required params', async () => {
    const responsePromise = unitycatalog.schemas.create({ catalog_name: 'string', name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await unitycatalog.schemas.create({
      catalog_name: 'string',
      name: 'string',
      comment: 'string',
      properties: { foo: 'string' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = unitycatalog.schemas.retrieve('string');
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
      unitycatalog.schemas.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unitycatalog.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = unitycatalog.schemas.update('string');
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
    await expect(unitycatalog.schemas.update('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unitycatalog.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      unitycatalog.schemas.update(
        'string',
        { comment: 'string', new_name: 'string', properties: { foo: 'string' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Unitycatalog.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = unitycatalog.schemas.list({ catalog_name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await unitycatalog.schemas.list({
      catalog_name: 'string',
      max_results: 0,
      page_token: 'string',
    });
  });

  test('delete', async () => {
    const responsePromise = unitycatalog.schemas.delete('string');
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
    await expect(unitycatalog.schemas.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Unitycatalog.NotFoundError,
    );
  });
});
