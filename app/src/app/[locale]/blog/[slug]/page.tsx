import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { BlogCard } from '@/components/blog/BlogCard';
import { BlogContentRenderer } from '@/components/blog/BlogContentRenderer';
import { BlogArticleDetailDocument, BlogRelatedArticlesDocument } from '@/graphql/generated/graphql';
import { Link } from '@/i18n/navigation';
import { extractBlogEntry, mapCraftBlogEntry, type CraftBlogEntry } from '@/lib/blogMappers';
import { craftQuery } from '@/lib/craftClient';
import { BLOG_RELATED_LIMIT } from '@/models/blog';
import { formatDate } from '@/utils/formatDate';

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const t = await getTranslations('blog');
  const data = await craftQuery(BlogArticleDetailDocument, { slug: [slug] });
  const article = extractBlogEntry(data.entry);

  if (!article) return { title: t('articleNotFound') };

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.perex,
  };
};

const BlogDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const t = await getTranslations('blog');
  const data = await craftQuery(BlogArticleDetailDocument, { slug: [slug] });
  const article = extractBlogEntry(data.entry);

  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="mb-4 text-2xl font-bold">{t('articleNotFound')}</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          {t('backToBlog')}
        </Link>
      </main>
    );
  }

  const primaryCategory = article.categories[0];
  let relatedArticles: ReturnType<typeof mapCraftBlogEntry>[] = [];

  if (primaryCategory) {
    const relatedData = await craftQuery(BlogRelatedArticlesDocument, {
      categorySlug: [primaryCategory.slug],
      excludeId: ['not', article.id],
      limit: BLOG_RELATED_LIMIT,
    });
    relatedArticles = (relatedData.entries ?? [])
      .filter((e): e is CraftBlogEntry => e?.__typename === 'blogArticle_Entry')
      .map(mapCraftBlogEntry);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/blog" className="hover:text-blue-600">
          {t('title')}
        </Link>
        <span>/</span>
        {primaryCategory && (
          <>
            <Link href={`/blog?category=${primaryCategory.slug}`} className="hover:text-blue-600">
              {primaryCategory.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="truncate text-gray-800">{article.title}</span>
      </nav>

      <div className="mb-4 flex flex-wrap gap-2">
        {article.categories.map(({ id, slug: catSlug, name }) => (
          <Link
            key={id}
            href={`/blog?category=${catSlug}`}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-100"
          >
            {name}
          </Link>
        ))}
      </div>

      <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
      <time dateTime={article.postDate} className="text-sm text-gray-500">
        {formatDate(article.postDate)}
      </time>

      {article.featuredImage && (
        <figure className="my-8">
          <Image
            src={article.featuredImage.url}
            alt={article.title}
            width={article.featuredImage.width}
            height={article.featuredImage.height}
            className="w-full rounded-xl"
            priority
          />
        </figure>
      )}

      <div className="mb-12">
        <BlogContentRenderer blocks={article.articleContent} />
      </div>

      <div className="mb-12 flex gap-3 border-t pt-6">
        <span className="text-sm text-gray-500">{t('share')}:</span>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`/blog/${article.slug}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          Facebook
        </a>
      </div>

      {relatedArticles.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold">{t('relatedArticles')}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedArticles.map(related => (
              <BlogCard key={related.id} article={related} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetailPage;
