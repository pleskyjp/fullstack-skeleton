'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { useRouter } from '@/i18n/navigation';
import type { BlogCategory } from '@/models/blog';

type Props = {
  categories: BlogCategory[];
  activeSlug: string | null;
};

const filterButtonClass = (isActive: boolean) =>
  `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`;

export const BlogCategoryFilter = ({ categories, activeSlug }: Props) => {
  const t = useTranslations('blog');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set('category', slug);
    else params.delete('category');
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <nav className="flex flex-wrap gap-2">
      <button onClick={() => handleClick(null)} className={filterButtonClass(!activeSlug)}>
        {t('allCategories')}
      </button>
      {categories.map(({ id, slug, name }) => (
        <button key={id} onClick={() => handleClick(slug)} className={filterButtonClass(activeSlug === slug)}>
          {name}
        </button>
      ))}
    </nav>
  );
};
