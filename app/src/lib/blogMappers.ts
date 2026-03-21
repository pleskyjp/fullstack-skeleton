import type {
  BlogArticleDetailQuery,
  BlogArticleDetailNoContentQuery,
  BlogArticlesQuery,
} from '@/graphql/generated/graphql';
import type { BlogArticle, BlogArticleDetail, BlogCategory, BlogContentBlock } from '@/models/blog';

export type CraftBlogEntry = Extract<
  NonNullable<NonNullable<BlogArticlesQuery['blogEntries']>[number]>,
  { __typename: 'blogArticle_Entry' }
>;

type DetailBlogEntry = Extract<NonNullable<BlogArticleDetailQuery['entry']>, { __typename: 'blogArticle_Entry' }>;
type NoContentBlogEntry = Extract<NonNullable<BlogArticleDetailNoContentQuery['entry']>, { __typename: 'blogArticle_Entry' }>;

const EMPTY_CATEGORY: BlogCategory = { id: '', name: '', slug: '' };
const BLOG_ENTRY_TYPE = 'blogArticle_Entry' as const;

export const mapCraftCategory = (
  category: { id?: string | null; title?: string | null; slug?: string | null } | null | undefined,
): BlogCategory =>
  category ? { id: category.id ?? '', name: category.title ?? '', slug: category.slug ?? '' } : EMPTY_CATEGORY;

export const mapCraftBlogEntry = (entry: CraftBlogEntry): BlogArticle => ({
  id: entry.id ?? '',
  slug: entry.slug ?? '',
  title: entry.title ?? '',
  perex: entry.perex ?? '',
  imageUrl: entry.featuredImage[0]?.url ?? '',
  categories: entry.blogCategory.filter(Boolean).map(mapCraftCategory),
  publishedAt: entry.postDate ?? '',
  isFeatured: entry.isFeatured ?? false,
});

export const mapArticleDetail = (entry: DetailBlogEntry | NoContentBlogEntry): BlogArticleDetail => {
  const [image] = entry.featuredImage;

  return {
    id: entry.id ?? '',
    slug: entry.slug ?? '',
    title: entry.title ?? '',
    postDate: entry.postDate ?? '',
    perex: entry.perex ?? '',
    featuredImage: image ? { url: image.url ?? '', width: image.width ?? 0, height: image.height ?? 0 } : null,
    categories: entry.blogCategory.filter(Boolean).map(mapCraftCategory),
    articleContent: ('articleContent' in entry ? entry.articleContent : []).filter(
      (block): block is BlogContentBlock => !!block?.__typename,
    ),
    metaTitle: ('metaTitle' in entry ? entry.metaTitle : null) ?? '',
    metaDescription: ('metaDescription' in entry ? entry.metaDescription : null) ?? '',
  };
};

export const extractBlogEntry = (entry: { __typename: string } | null | undefined) =>
  entry?.__typename === BLOG_ENTRY_TYPE ? mapArticleDetail(entry as DetailBlogEntry) : null;
