import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

const config: CodegenConfig = {
  schema: process.env.CRAFT_GRAPHQL_URL || 'https://testing.vlastnici.digital.cz/api',
  documents: ['src/graphql/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      documentTransforms: [addTypenameSelectionDocumentTransform],
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        nonOptionalTypename: true,
        scalars: {
          DateTime: 'string',
          QueryArgument: 'string | number',
        },
      },
    },
  },
};

export default config;
