import { Router } from 'express';

import { validate } from '../../common/middleware/validate.js';
import { CreateNoteSchema, UpdateNoteSchema } from './notes.schema.js';
import { notesService } from './notes.service.js';

const router = Router();

router.get('/', async (_req, res) => {
  res.json(await notesService.list());
});

router.get('/:id', async (req, res) => {
  res.json(await notesService.getById(req.params.id));
});

router.post('/', validate(CreateNoteSchema), async (req, res) => {
  res.status(201).json(await notesService.create(req.body));
});

router.put('/:id', validate(UpdateNoteSchema), async (req, res) => {
  res.json(await notesService.update(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
  await notesService.delete(req.params.id);
  res.status(204).send();
});

export default router;
