import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BlogArticleDetailDocument,
  BlogRelatedArticlesDocument,
} from '@/graphql/generated/graphql';
import { craftQuery } from '@/lib/craftClient';
import { extractBlogEntry, mapCraftBlogEntry, type CraftBlogEntry } from '@/lib/blogMappers';
import { BLOG_RELATED_LIMIT } from '@/models/blog';
import { BlogContentRenderer } from '@/components/blog/BlogContentRenderer';
import { BlogCard } from '@/components/blog/BlogCard';

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const data = await craftQuery(BlogArticleDetailDocument, { slug: [slug] });
  const article = extractBlogEntry(data.entry);

  if (!article) return { title: 'Článek nenalezen' };

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.perex,
  };
};

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });

const BlogDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const data = await craftQuery(BlogArticleDetailDocument, { slug: [slug] });
  const article = extractBlogEntry(data.entry);

  if (!article) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Článek nenalezen</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">Zpět na blog</Link>
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
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span>/</span>
        {primaryCategory && (
          <>
            <Link href={`/blog?category=${primaryCategory.slug}`} className="hover:text-blue-600">
              {primaryCategory.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-800 truncate">{article.title}</span>
      </nav>

      <div className="flex flex-wrap gap-2 mb-4">
        {article.categories.map(cat => (
          <Link
            key={cat.id}
            href={`/blog?category=${cat.slug}`}
            className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <time className="text-gray-500 text-sm">{formatDate(article.postDate)}</time>

      {article.featuredImage && (
        <Image
          src={article.featuredImage.url}
          alt={article.title}
          width={article.featuredImage.width}
          height={article.featuredImage.height}
          className="rounded-xl mt-8 mb-8 w-full"
          priority
        />
      )}

      <div className="mb-12">
        <BlogContentRenderer blocks={article.articleContent} />
      </div>

      <div className="flex gap-3 border-t pt-6 mb-12">
        <span className="text-sm text-gray-500">Sdílet:</span>
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
          <h2 className="text-2xl font-bold mb-6">Související články</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
