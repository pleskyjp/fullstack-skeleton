import type { RequestHandler } from 'express';
import type { ZodType } from 'zod/v4';

import { AppError } from '../errors.js';

export const validate =
  (schema: ZodType): RequestHandler =>
  (req, _res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) throw AppError.validation(result.error.issues.map(({ message }) => message).join(', '));

    req.body = result.data;
    next();
  };
