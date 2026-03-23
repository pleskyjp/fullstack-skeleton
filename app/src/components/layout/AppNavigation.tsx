'use client';

import { useLocale, useTranslations } from 'next-intl';

import type { Locale } from '@/i18n/config';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

const NAV_ITEMS = [
  { href: '/' as const, labelKey: 'nav.home' },
  { href: '/blog' as const, labelKey: 'nav.blog' },
  { href: '/notes' as const, labelKey: 'nav.notes' },
] as const;

const LOCALE_LABELS: Record<Locale, string> = { cs: 'CZ', en: 'EN' };

export const AppNavigation = () => {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const switchLocale = (newLocale: Locale) => router.replace(pathname, { locale: newLocale });

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4">
        <Link href="/" className="text-lg font-bold text-gray-900">
          {t('app.name')}
        </Link>
        <div className="flex gap-4">
          {NAV_ITEMS.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition ${isActive(href) ? 'font-medium text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t(labelKey)}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex gap-1">
          {(Object.entries(LOCALE_LABELS) as [Locale, string][]).map(([loc, label]) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`rounded px-2 py-1 text-xs font-medium transition ${locale === loc ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
