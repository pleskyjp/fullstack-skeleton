import cors from 'cors';
import express from 'express';

import { errorHandler } from './common/middleware/errorHandler.js';
import { localeMiddleware } from './i18n/middleware.js';
import notesRouter from './modules/notes/notes.router.js';
import { generateSpec } from './openapi.js';

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());
app.use(localeMiddleware);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/openapi.json', (_req, res) => {
  res.json(generateSpec());
});

app.use('/api/notes', notesRouter);

app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
