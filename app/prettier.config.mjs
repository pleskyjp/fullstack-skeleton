/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',
  arrowParens: 'avoid',
  quoteProps: 'consistent',
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: ['<BUILTIN_MODULES>', '', '<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '', '^[./]'],
  importOrderTypeScriptVersion: '5.9.3',
  tailwindStylesheet: './src/app/globals.css',
  tailwindFunctions: ['cn'],
};
