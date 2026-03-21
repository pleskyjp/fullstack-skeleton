import type { RequestHandler } from 'express';
import { resolveLocale } from './t.js';
import type { Locale } from './config.js';

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
