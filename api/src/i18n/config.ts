export const DEFAULT_LOCALE = 'cs' as const;
export const SUPPORTED_LOCALES = ['cs', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
