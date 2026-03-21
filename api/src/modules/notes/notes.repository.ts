import { prisma } from '../../lib/prisma.js';

export const notesRepository = {
  findAll: () =>
    prisma.note.findMany({ orderBy: { createdAt: 'desc' } }),

  count: () =>
    prisma.note.count(),

  findById: (id: string) =>
    prisma.note.findUnique({ where: { id } }),

  create: (data: { title: string; content: string; completed: boolean }) =>
    prisma.note.create({ data }),

  update: (id: string, data: { title?: string; content?: string; completed?: boolean }) =>
    prisma.note.update({ where: { id }, data }),

  delete: (id: string) =>
    prisma.note.delete({ where: { id } }),
};
