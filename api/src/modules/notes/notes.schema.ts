import { z } from 'zod/v4';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const NoteSchema = z.object({
  id: z.string().uuid().openapi({ description: 'Unique identifier', example: '550e8400-e29b-41d4-a716-446655440000' }),
  title: z.string().min(1).max(200).openapi({ description: 'Note title', example: 'My first note' }),
  content: z.string().openapi({ description: 'Note body', example: 'This is the content of my note.' }),
  completed: z.boolean().openapi({ description: 'Whether the note is completed' }),
  createdAt: z.string().datetime().openapi({ description: 'Creation timestamp' }),
  updatedAt: z.string().datetime().openapi({ description: 'Last update timestamp' }),
});

export const CreateNoteSchema = z.object({
  title: NoteSchema.shape.title,
  content: NoteSchema.shape.content,
  completed: NoteSchema.shape.completed.optional().default(false),
});

export const UpdateNoteSchema = z.object({
  title: NoteSchema.shape.title.optional(),
  content: NoteSchema.shape.content.optional(),
  completed: NoteSchema.shape.completed.optional(),
});

export const NoteListSchema = z.object({
  items: z.array(NoteSchema),
  total: z.number().int().openapi({ description: 'Total number of notes' }),
});

export const ErrorSchema = z.object({
  error: z.string().openapi({ description: 'Error message' }),
});

export type Note = z.infer<typeof NoteSchema>;
export type CreateNote = z.infer<typeof CreateNoteSchema>;
export type UpdateNote = z.infer<typeof UpdateNoteSchema>;

export const registerNoteRoutes = (registry: OpenAPIRegistry) => {
  registry.register('Note', NoteSchema);
  registry.register('CreateNote', CreateNoteSchema);
  registry.register('UpdateNote', UpdateNoteSchema);
  registry.register('NoteList', NoteListSchema);
  registry.register('Error', ErrorSchema);

  const noteIdParam = NoteSchema.shape.id.openapi({ param: { name: 'id', in: 'path' } });

  registry.registerPath({
    method: 'get',
    path: '/api/notes',
    summary: 'List all notes',
    tags: ['Notes'],
    responses: {
      200: { description: 'List of notes', content: { 'application/json': { schema: NoteListSchema } } },
    },
  });

  registry.registerPath({
    method: 'get',
    path: '/api/notes/{id}',
    summary: 'Get a note by ID',
    tags: ['Notes'],
    request: { params: NoteSchema.pick({ id: true }) },
    responses: {
      200: { description: 'Note found', content: { 'application/json': { schema: NoteSchema } } },
      404: { description: 'Note not found', content: { 'application/json': { schema: ErrorSchema } } },
    },
  });

  registry.registerPath({
    method: 'post',
    path: '/api/notes',
    summary: 'Create a note',
    tags: ['Notes'],
    request: { body: { content: { 'application/json': { schema: CreateNoteSchema } } } },
    responses: {
      201: { description: 'Note created', content: { 'application/json': { schema: NoteSchema } } },
      400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    },
  });

  registry.registerPath({
    method: 'put',
    path: '/api/notes/{id}',
    summary: 'Update a note',
    tags: ['Notes'],
    request: {
      params: NoteSchema.pick({ id: true }),
      body: { content: { 'application/json': { schema: UpdateNoteSchema } } },
    },
    responses: {
      200: { description: 'Note updated', content: { 'application/json': { schema: NoteSchema } } },
      400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
      404: { description: 'Note not found', content: { 'application/json': { schema: ErrorSchema } } },
    },
  });

  registry.registerPath({
    method: 'delete',
    path: '/api/notes/{id}',
    summary: 'Delete a note',
    tags: ['Notes'],
    request: { params: NoteSchema.pick({ id: true }) },
    responses: {
      204: { description: 'Note deleted' },
      404: { description: 'Note not found', content: { 'application/json': { schema: ErrorSchema } } },
    },
  });
};
