import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from './config.js';
import cs from './messages/cs.js';
import en from './messages/en.js';

type DeepStringify<T> = { [K in keyof T]: T[K] extends Record<string, unknown> ? DeepStringify<T[K]> : string };
type Messages = DeepStringify<typeof cs>;
type FlatKeys<T, P extends string = ''> =
  T extends Record<string, unknown>
    ? { [K in keyof T]: FlatKeys<T[K], P extends '' ? `${K & string}` : `${P}.${K & string}`> }[keyof T]
    : P;

type MessageKey = FlatKeys<Messages>;

const messages: Record<Locale, Messages> = { cs, en };

const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
  const value = path.split('.').reduce<unknown>((acc, key) => (acc as Record<string, unknown>)?.[key], obj);
  return typeof value === 'string' ? value : path;
};

export const t = (locale: Locale, key: MessageKey, params?: Record<string, string>): string => {
  let result = getNestedValue(messages[locale] as unknown as Record<string, unknown>, key);
  if (params)
    Object.entries(params).forEach(([k, v]) => {
      result = result.replace(`{${k}}`, v);
    });
  return result;
};

export const resolveLocale = (acceptLanguage?: string): Locale => {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  const preferred = acceptLanguage.split(',').map(l => l.split(';')[0].trim().split('-')[0]);
  return (preferred.find(l => SUPPORTED_LOCALES.includes(l as Locale)) as Locale) ?? DEFAULT_LOCALE;
};
