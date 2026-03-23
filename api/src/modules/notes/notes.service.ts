import { AppError } from '../../common/errors.js';
import { notesRepository } from './notes.repository.js';
import type { CreateNote, UpdateNote } from './notes.schema.js';

const RESOURCE = 'Note';

const assertNoteExists = async (id: string) => {
  const note = await notesRepository.findById(id);
  if (!note) throw AppError.notFound(RESOURCE);
  return note;
};

export const notesService = {
  list: async () => {
    const [items, total] = await Promise.all([notesRepository.findAll(), notesRepository.count()]);
    return { items, total };
  },

  getById: (id: string) => assertNoteExists(id),

  create: (data: CreateNote) => notesRepository.create(data),

  update: async (id: string, data: UpdateNote) => {
    await assertNoteExists(id);
    return notesRepository.update(id, data);
  },

  delete: async (id: string) => {
    await assertNoteExists(id);
    await notesRepository.delete(id);
  },
};
