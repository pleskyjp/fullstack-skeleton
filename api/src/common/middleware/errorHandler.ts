import type { ErrorRequestHandler } from 'express';
import { AppError } from '../errors.js';
import { t } from '../../i18n/t.js';

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  const locale = req.locale ?? 'cs';

  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.localizedMessage(locale) });
    return;
  }

  console.error('Unhandled error:', err);
  res.status(500).json({ error: t(locale, 'errors.internal') });
};
