import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: '../openapi/openapi.yaml',
  output: {
    format: 'prettier',
    path: 'src/api/generated',
  },
  plugins: [
    { name: '@hey-api/typescript', enums: 'javascript' },
    { name: '@hey-api/sdk', operationId: true },
    { name: '@hey-api/client-fetch' },
  ],
});
