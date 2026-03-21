'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import type { BlogCategory } from '@/models/blog';

type Props = {
  categories: BlogCategory[];
  activeSlug: string | null;
};

export const BlogCategoryFilter = ({ categories, activeSlug }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    slug ? params.set('category', slug) : params.delete('category');
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleClick(null)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${!activeSlug ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => handleClick(cat.slug)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeSlug === cat.slug ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
