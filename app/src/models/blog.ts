import type { BlogArticleDetailQuery } from '@/graphql/generated/graphql';

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};

export type BlogArticle = {
  id: string;
  slug: string;
  title: string;
  perex: string;
  imageUrl: string;
  categories: BlogCategory[];
  publishedAt: string;
  isFeatured: boolean;
};

export type BlogArticleListResponse = {
  items: BlogArticle[];
  count: number;
  page: number;
};

export const BLOG_PAGE_LIMIT = 9;
export const BLOG_RELATED_LIMIT = 3;

type DetailEntry = Extract<NonNullable<BlogArticleDetailQuery['entry']>, { __typename: 'blogArticle_Entry' }>;

export type BlogContentBlock = NonNullable<DetailEntry['articleContent'][number]>;

export type BlogBlockHeading = Extract<BlogContentBlock, { __typename: 'heading_Entry' }>;
export type BlogBlockText = Extract<BlogContentBlock, { __typename: 'textBlock_Entry' }>;
export type BlogBlockChecklist = Extract<BlogContentBlock, { __typename: 'checklist_Entry' }>;
export type BlogBlockBulletList = Extract<BlogContentBlock, { __typename: 'bulletList_Entry' }>;
export type BlogBlockNumberedList = Extract<BlogContentBlock, { __typename: 'numberedList_Entry' }>;
export type BlogBlockQuote = Extract<BlogContentBlock, { __typename: 'quote_Entry' }>;
export type BlogBlockImage = Extract<BlogContentBlock, { __typename: 'imageWithCaption_Entry' }>;
export type BlogBlockYoutube = Extract<BlogContentBlock, { __typename: 'youtubeEmbed_Entry' }>;
export type BlogBlockAuthorCard = Extract<BlogContentBlock, { __typename: 'authorCard_Entry' }>;

export const BlogBlockType = {
  HEADING: 'heading_Entry',
  TEXT: 'textBlock_Entry',
  CHECKLIST: 'checklist_Entry',
  BULLET_LIST: 'bulletList_Entry',
  NUMBERED_LIST: 'numberedList_Entry',
  QUOTE: 'quote_Entry',
  IMAGE: 'imageWithCaption_Entry',
  YOUTUBE: 'youtubeEmbed_Entry',
  AUTHOR_CARD: 'authorCard_Entry',
} as const;

export type BlogBlockType = (typeof BlogBlockType)[keyof typeof BlogBlockType];

export type BlogArticleDetail = {
  id: string;
  slug: string;
  title: string;
  postDate: string;
  perex: string;
  featuredImage: { url: string; width: number; height: number } | null;
  categories: BlogCategory[];
  articleContent: BlogContentBlock[];
  metaTitle: string;
  metaDescription: string;
};
