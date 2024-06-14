// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Unitycatalog from 'unitycatalog';
import { Response } from 'node-fetch';

const unitycatalog = new Unitycatalog({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  test('create: only required params', async () => {
    const responsePromise = unitycatalog.functions.create({
      function_info: {
        name: 'string',
        catalog_name: 'string',
        schema_name: 'string',
        input_params: {},
        data_type: 'BOOLEAN',
        full_data_type: 'string',
        routine_body: 'SQL',
        routine_definition: 'string',
        parameter_style: 'S',
        is_deterministic: true,
        sql_data_access: 'CONTAINS_SQL',
        is_null_call: true,
        security_type: 'DEFINER',
        specific_name: 'string',
        properties: 'string',
      },
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
    const response = await unitycatalog.functions.create({
      function_info: {
        name: 'string',
        catalog_name: 'string',
        schema_name: 'string',
        input_params: {
          parameters: [
            {
              name: 'string',
              type_text: 'string',
              type_json: 'string',
              type_name: 'BOOLEAN',
              type_precision: 0,
              type_scale: 0,
              type_interval_type: 'string',
              position: 0,
              parameter_mode: 'IN',
              parameter_type: 'PARAM',
              parameter_default: 'string',
              comment: 'string',
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
              parameter_mode: 'IN',
              parameter_type: 'PARAM',
              parameter_default: 'string',
              comment: 'string',
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
              parameter_mode: 'IN',
              parameter_type: 'PARAM',
              parameter_default: 'string',
              comment: 'string',
            },
          ],
        },
        data_type: 'BOOLEAN',
        full_data_type: 'string',
        return_params: {
          parameters: [
            {
              name: 'string',
              type_text: 'string',
              type_json: 'string',
              type_name: 'BOOLEAN',
              type_precision: 0,
              type_scale: 0,
              type_interval_type: 'string',
              position: 0,
              parameter_mode: 'IN',
              parameter_type: 'PARAM',
              parameter_default: 'string',
              comment: 'string',
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
              parameter_mode: 'IN',
              parameter_type: 'PARAM',
              parameter_default: 'string',
              comment: 'string',
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
              parameter_mode: 'IN',
              parameter_type: 'PARAM',
              parameter_default: 'string',
              comment: 'string',
            },
          ],
        },
        routine_body: 'SQL',
        routine_definition: 'string',
        routine_dependencies: {
          dependencies: [
            { table: { table_full_name: 'string' }, function: { function_full_name: 'string' } },
            { table: { table_full_name: 'string' }, function: { function_full_name: 'string' } },
            { table: { table_full_name: 'string' }, function: { function_full_name: 'string' } },
          ],
        },
        parameter_style: 'S',
        is_deterministic: true,
        sql_data_access: 'CONTAINS_SQL',
        is_null_call: true,
        security_type: 'DEFINER',
        specific_name: 'string',
        comment: 'string',
        properties: 'string',
        external_language: 'string',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = unitycatalog.functions.retrieve('string');
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
      unitycatalog.functions.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unitycatalog.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = unitycatalog.functions.list({ catalog_name: 'string', schema_name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await unitycatalog.functions.list({
      catalog_name: 'string',
      schema_name: 'string',
      max_results: 0,
      page_token: 'string',
    });
  });

  test('delete', async () => {
    const responsePromise = unitycatalog.functions.delete('string');
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
    await expect(
      unitycatalog.functions.delete('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Unitycatalog.NotFoundError);
  });
});
