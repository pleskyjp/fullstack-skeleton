import Image from 'next/image';
import Link from 'next/link';
import type { BlogArticle } from '@/models/blog';
import { formatDate } from '@/utils/formatDate';

export const BlogCard = ({ article }: { article: BlogArticle }) => (
  <Link href={`/blog/${article.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-md">
    {article.imageUrl && (
      <div className="relative aspect-[300/160] w-full overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    )}
    <div className="flex flex-1 flex-col gap-2 p-3 md:p-4 lg:p-5">
      <div className="flex flex-wrap items-center gap-2">
        {article.categories.map(cat => (
          <span key={cat.id} className="rounded-full bg-gray-100 px-2 py-1 text-xs">{cat.name}</span>
        ))}
        <span className="text-xs text-gray-500">{formatDate(article.publishedAt)}</span>
      </div>
      <h3 className="line-clamp-2 text-xl font-bold leading-[26px] lg:text-2xl lg:leading-7">{article.title}</h3>
      <p className="line-clamp-3 text-base leading-6 text-gray-700">{article.perex}</p>
    </div>
  </Link>
);
