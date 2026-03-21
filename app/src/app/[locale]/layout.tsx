import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '@/i18n/config';
import { routing } from '@/i18n/routing';
import { AppNavigation } from '@/components/layout/AppNavigation';

export const generateStaticParams = () =>
  routing.locales.map(locale => ({ locale }));

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const LocaleLayout = async ({ children, params }: Props) => {
  const { locale } = await params;
  if (!hasLocale(SUPPORTED_LOCALES, locale)) notFound();

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <AppNavigation />
      <div className="flex-1">{children}</div>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
