import Image from 'next/image';
import Link from 'next/link';
import type { BlogArticle } from '@/models/blog';
import { formatDate } from '@/utils/formatDate';

export const BlogFeaturedArticle = ({ article }: { article: BlogArticle }) => (
  <Link href={`/blog/${article.slug}`} className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md md:flex">
    {article.imageUrl && (
      <div className="relative aspect-[16/10] md:w-1/2">
        <Image src={article.imageUrl} alt={article.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    )}
    <div className="flex flex-col justify-center gap-3 p-5 md:w-1/2 md:p-8">
      <div className="flex flex-wrap items-center gap-2">
        {article.categories.map(cat => (
          <span key={cat.id} className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">{cat.name}</span>
        ))}
        <span className="text-xs text-gray-500">{formatDate(article.publishedAt)}</span>
      </div>
      <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{article.title}</h2>
      <p className="line-clamp-3 text-gray-600">{article.perex}</p>
    </div>
  </Link>
);
