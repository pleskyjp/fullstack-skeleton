import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { generateSpec } from '../openapi.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../../../openapi/openapi.yaml');
mkdirSync(dirname(outPath), { recursive: true });

const spec = generateSpec();
writeFileSync(outPath, YAML.stringify(spec, { lineWidth: 120 }));
console.log(`OpenAPI spec written to ${outPath}`);
