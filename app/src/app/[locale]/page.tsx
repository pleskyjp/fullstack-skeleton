import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const FEATURES = [
  { href: '/blog' as const, titleKey: 'blog.title', descKey: 'home.blogDescription', tagKey: 'home.serverComponents' },
  { href: '/notes' as const, titleKey: 'notes.title', descKey: 'home.notesDescription', tagKey: 'home.clientComponents' },
] as const;

const HomePage = () => {
  const t = useTranslations();

  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-4 text-5xl font-bold">{t('home.title')}</h1>
      <p className="mb-12 text-lg text-gray-600">{t('home.subtitle')}</p>

      <div className="grid gap-6">
        {FEATURES.map(({ href, titleKey, descKey, tagKey }) => (
          <Link key={href} href={href} className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">{t(tagKey)}</span>
            <h2 className="mt-3 text-2xl font-bold transition-colors group-hover:text-blue-600">{t(titleKey)}</h2>
            <p className="mt-2 text-gray-600">{t(descKey)}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
