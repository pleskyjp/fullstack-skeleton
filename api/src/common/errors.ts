import type { Locale } from '../i18n/config.js';
import { t } from '../i18n/t.js';

export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly i18nKey?: string,
    public readonly i18nParams?: Record<string, string>,
  ) {
    super(message);
  }

  localizedMessage(locale: Locale): string {
    return this.i18nKey ? t(locale, this.i18nKey as Parameters<typeof t>[1], this.i18nParams) : this.message;
  }

  static notFound(resource: string) {
    return new AppError(404, `${resource} not found`, 'errors.notFound', { resource });
  }

  static badRequest(message: string) {
    return new AppError(400, message, 'errors.badRequest');
  }

  static validation(message: string) {
    return new AppError(400, message, 'errors.validation');
  }
}
