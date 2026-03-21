import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import {
  BlogArticlesDocument,
  BlogCategoriesDocument,
  BlogFeaturedDocument,
} from '@/graphql/generated/graphql';
import { craftQuery } from '@/lib/craftClient';
import { mapCraftBlogEntry, mapCraftCategory, type CraftBlogEntry } from '@/lib/blogMappers';
import { BLOG_PAGE_LIMIT } from '@/models/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogFeaturedArticle } from '@/components/blog/BlogFeaturedArticle';
import { BlogCategoryFilter } from '@/components/blog/BlogCategoryFilter';

type Props = {
  searchParams: Promise<{ category?: string }>;
};

const BlogPage = async ({ searchParams }: Props) => {
  const t = await getTranslations('blog');
  const { category } = await searchParams;
  const categorySlug = category ?? null;

  const [articlesData, featuredData, categoriesData] = await Promise.all([
    craftQuery(BlogArticlesDocument, {
      limit: BLOG_PAGE_LIMIT,
      offset: 0,
      categorySlug: categorySlug ? [categorySlug] : null,
    }),
    craftQuery(BlogFeaturedDocument),
    craftQuery(BlogCategoriesDocument),
  ]);

  const articles = (articlesData.blogEntries ?? [])
    .filter((e): e is CraftBlogEntry => e?.__typename === 'blogArticle_Entry')
    .map(mapCraftBlogEntry);

  const featured = (featuredData.featuredEntry ?? [])
    .filter((e): e is CraftBlogEntry => e?.__typename === 'blogArticle_Entry')
    .map(mapCraftBlogEntry)[0] ?? null;

  const categories = (categoriesData.blogCategories ?? []).map(mapCraftCategory);
  const gridArticles = articles.filter(a => a.id !== featured?.id);

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-1 flex-col items-center gap-8 pb-20 lg:gap-20">
        <div className="flex w-full flex-col items-center">
          <div className="relative z-[1] mb-[-60px] flex w-full flex-col items-start md:mb-[-80px] lg:mb-[-60px]">
            <div className="w-full bg-gray-50 px-4 pt-4 pb-[130px] md:pt-8 md:pb-[110px] lg:pt-12 lg:pb-24">
              <div className="mx-auto max-w-[1240px]">
                <h1 className="text-4xl font-bold leading-[44px] text-blue-600 md:text-5xl md:leading-[58px] lg:text-[56px] lg:leading-[68px]">
                  {t('title')}
                </h1>
              </div>
            </div>
          </div>

          <div className="relative z-[2] w-full px-4 md:px-6">
            <div className="mx-auto max-w-[1240px]">
              {featured && !categorySlug && <BlogFeaturedArticle article={featured} />}
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6 px-4 md:px-6">
          <Suspense>
            {categories.length > 0 && <BlogCategoryFilter categories={categories} activeSlug={categorySlug} />}
          </Suspense>

          {gridArticles.length > 0 && (
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
              {gridArticles.map(article => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {articles.length === 0 && <p className="py-12 text-center text-gray-500">{t('noArticles')}</p>}

          <p className="mt-8 text-center text-sm text-gray-400">
            {t('showingArticles', { shown: articles.length, total: articlesData.entryCount })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
