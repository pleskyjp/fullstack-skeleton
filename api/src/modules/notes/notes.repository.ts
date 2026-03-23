import { prisma } from '../../lib/prisma.js';
import type { CreateNote, UpdateNote } from './notes.schema.js';

export const notesRepository = {
  findAll: () => prisma.note.findMany({ orderBy: { createdAt: 'desc' } }),

  count: () => prisma.note.count(),

  findById: (id: string) => prisma.note.findUnique({ where: { id } }),

  create: (data: CreateNote) => prisma.note.create({ data }),

  update: (id: string, data: UpdateNote) => prisma.note.update({ where: { id }, data }),

  delete: (id: string) => prisma.note.delete({ where: { id } }),
};
