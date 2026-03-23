import type { RequestHandler } from 'express';

import type { Locale } from './config.js';
import { resolveLocale } from './t.js';

declare global {
  namespace Express {
    interface Request {
      locale: Locale;
    }
  }
}

export const localeMiddleware: RequestHandler = (req, _res, next) => {
  req.locale = resolveLocale(req.headers['accept-language']);
  next();
};
