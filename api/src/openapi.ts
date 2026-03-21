import { OpenAPIRegistry, OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';
import { registerNoteRoutes } from './modules/notes/notes.schema.js';

const registry = new OpenAPIRegistry();

registerNoteRoutes(registry);

export const generateSpec = () => {
  const generator = new OpenApiGeneratorV31(registry.definitions);
  return generator.generateDocument({
    openapi: '3.1.0',
    info: { title: 'Fullstack Skeleton API', version: '1.0.0', description: 'REST API' },
    servers: [{ url: 'https://api.localhost', description: 'Local development' }],
  });
};
