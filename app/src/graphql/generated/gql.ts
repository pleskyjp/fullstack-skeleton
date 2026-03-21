/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment BlogListingEntry on blogArticle_Entry {\n    id\n    slug\n    title\n    postDate\n    perex\n    isFeatured\n    featuredImage {\n      url\n      width\n      height\n    }\n    blogCategory {\n      id\n      slug\n      title\n    }\n  }\n": typeof types.BlogListingEntryFragmentDoc,
    "\n  query BlogArticleDetail($slug: [String]) {\n    entry(section: \"blog\", slug: $slug) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n        metaTitle\n        metaDescription\n        articleContent {\n          __typename\n          ... on heading_Entry {\n            text\n          }\n          ... on textBlock_Entry {\n            body {\n              html\n            }\n          }\n          ... on checklist_Entry {\n            items {\n              text\n            }\n          }\n          ... on bulletList_Entry {\n            items {\n              text\n            }\n          }\n          ... on numberedList_Entry {\n            items {\n              text\n            }\n          }\n          ... on quote_Entry {\n            text\n            authorPhoto {\n              url\n            }\n            authorName\n            authorPosition\n          }\n          ... on imageWithCaption_Entry {\n            image {\n              url\n              width\n              height\n            }\n            caption\n          }\n          ... on youtubeEmbed_Entry {\n            videoUrl {\n              url\n            }\n          }\n          ... on authorCard_Entry {\n            title\n            photo {\n              url\n            }\n            position\n            bio\n          }\n        }\n      }\n    }\n  }\n": typeof types.BlogArticleDetailDocument,
    "\n  query BlogArticleDetailNoContent($slug: [String]) {\n    entry(section: \"blog\", slug: $slug) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n": typeof types.BlogArticleDetailNoContentDocument,
    "\n  query BlogRelatedArticles($categorySlug: [String], $excludeId: [QueryArgument], $limit: Int) {\n    entries(\n      section: \"blog\"\n      relatedToCategories: { slug: $categorySlug }\n      id: $excludeId\n      limit: $limit\n      orderBy: \"postDate DESC\"\n    ) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n": typeof types.BlogRelatedArticlesDocument,
    "\n  query BlogArticles($limit: Int, $offset: Int, $categorySlug: [String]) {\n    blogEntries: entries(\n      section: \"blog\"\n      limit: $limit\n      offset: $offset\n      relatedToCategories: { slug: $categorySlug }\n      orderBy: \"postDate DESC\"\n    ) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n    entryCount(section: \"blog\", relatedToCategories: { slug: $categorySlug })\n  }\n": typeof types.BlogArticlesDocument,
    "\n  query BlogFeatured {\n    featuredEntry: entries(section: \"blog\", isFeatured: true, limit: 1, orderBy: \"postDate DESC\") {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n": typeof types.BlogFeaturedDocument,
    "\n  query BlogCategories {\n    blogCategories: categories(group: \"blogCategories\") {\n      id\n      slug\n      title\n    }\n  }\n": typeof types.BlogCategoriesDocument,
};
const documents: Documents = {
    "\n  fragment BlogListingEntry on blogArticle_Entry {\n    id\n    slug\n    title\n    postDate\n    perex\n    isFeatured\n    featuredImage {\n      url\n      width\n      height\n    }\n    blogCategory {\n      id\n      slug\n      title\n    }\n  }\n": types.BlogListingEntryFragmentDoc,
    "\n  query BlogArticleDetail($slug: [String]) {\n    entry(section: \"blog\", slug: $slug) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n        metaTitle\n        metaDescription\n        articleContent {\n          __typename\n          ... on heading_Entry {\n            text\n          }\n          ... on textBlock_Entry {\n            body {\n              html\n            }\n          }\n          ... on checklist_Entry {\n            items {\n              text\n            }\n          }\n          ... on bulletList_Entry {\n            items {\n              text\n            }\n          }\n          ... on numberedList_Entry {\n            items {\n              text\n            }\n          }\n          ... on quote_Entry {\n            text\n            authorPhoto {\n              url\n            }\n            authorName\n            authorPosition\n          }\n          ... on imageWithCaption_Entry {\n            image {\n              url\n              width\n              height\n            }\n            caption\n          }\n          ... on youtubeEmbed_Entry {\n            videoUrl {\n              url\n            }\n          }\n          ... on authorCard_Entry {\n            title\n            photo {\n              url\n            }\n            position\n            bio\n          }\n        }\n      }\n    }\n  }\n": types.BlogArticleDetailDocument,
    "\n  query BlogArticleDetailNoContent($slug: [String]) {\n    entry(section: \"blog\", slug: $slug) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n": types.BlogArticleDetailNoContentDocument,
    "\n  query BlogRelatedArticles($categorySlug: [String], $excludeId: [QueryArgument], $limit: Int) {\n    entries(\n      section: \"blog\"\n      relatedToCategories: { slug: $categorySlug }\n      id: $excludeId\n      limit: $limit\n      orderBy: \"postDate DESC\"\n    ) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n": types.BlogRelatedArticlesDocument,
    "\n  query BlogArticles($limit: Int, $offset: Int, $categorySlug: [String]) {\n    blogEntries: entries(\n      section: \"blog\"\n      limit: $limit\n      offset: $offset\n      relatedToCategories: { slug: $categorySlug }\n      orderBy: \"postDate DESC\"\n    ) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n    entryCount(section: \"blog\", relatedToCategories: { slug: $categorySlug })\n  }\n": types.BlogArticlesDocument,
    "\n  query BlogFeatured {\n    featuredEntry: entries(section: \"blog\", isFeatured: true, limit: 1, orderBy: \"postDate DESC\") {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n": types.BlogFeaturedDocument,
    "\n  query BlogCategories {\n    blogCategories: categories(group: \"blogCategories\") {\n      id\n      slug\n      title\n    }\n  }\n": types.BlogCategoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BlogListingEntry on blogArticle_Entry {\n    id\n    slug\n    title\n    postDate\n    perex\n    isFeatured\n    featuredImage {\n      url\n      width\n      height\n    }\n    blogCategory {\n      id\n      slug\n      title\n    }\n  }\n"): (typeof documents)["\n  fragment BlogListingEntry on blogArticle_Entry {\n    id\n    slug\n    title\n    postDate\n    perex\n    isFeatured\n    featuredImage {\n      url\n      width\n      height\n    }\n    blogCategory {\n      id\n      slug\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BlogArticleDetail($slug: [String]) {\n    entry(section: \"blog\", slug: $slug) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n        metaTitle\n        metaDescription\n        articleContent {\n          __typename\n          ... on heading_Entry {\n            text\n          }\n          ... on textBlock_Entry {\n            body {\n              html\n            }\n          }\n          ... on checklist_Entry {\n            items {\n              text\n            }\n          }\n          ... on bulletList_Entry {\n            items {\n              text\n            }\n          }\n          ... on numberedList_Entry {\n            items {\n              text\n            }\n          }\n          ... on quote_Entry {\n            text\n            authorPhoto {\n              url\n            }\n            authorName\n            authorPosition\n          }\n          ... on imageWithCaption_Entry {\n            image {\n              url\n              width\n              height\n            }\n            caption\n          }\n          ... on youtubeEmbed_Entry {\n            videoUrl {\n              url\n            }\n          }\n          ... on authorCard_Entry {\n            title\n            photo {\n              url\n            }\n            position\n            bio\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BlogArticleDetail($slug: [String]) {\n    entry(section: \"blog\", slug: $slug) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n        metaTitle\n        metaDescription\n        articleContent {\n          __typename\n          ... on heading_Entry {\n            text\n          }\n          ... on textBlock_Entry {\n            body {\n              html\n            }\n          }\n          ... on checklist_Entry {\n            items {\n              text\n            }\n          }\n          ... on bulletList_Entry {\n            items {\n              text\n            }\n          }\n          ... on numberedList_Entry {\n            items {\n              text\n            }\n          }\n          ... on quote_Entry {\n            text\n            authorPhoto {\n              url\n            }\n            authorName\n            authorPosition\n          }\n          ... on imageWithCaption_Entry {\n            image {\n              url\n              width\n              height\n            }\n            caption\n          }\n          ... on youtubeEmbed_Entry {\n            videoUrl {\n              url\n            }\n          }\n          ... on authorCard_Entry {\n            title\n            photo {\n              url\n            }\n            position\n            bio\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BlogArticleDetailNoContent($slug: [String]) {\n    entry(section: \"blog\", slug: $slug) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n"): (typeof documents)["\n  query BlogArticleDetailNoContent($slug: [String]) {\n    entry(section: \"blog\", slug: $slug) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BlogRelatedArticles($categorySlug: [String], $excludeId: [QueryArgument], $limit: Int) {\n    entries(\n      section: \"blog\"\n      relatedToCategories: { slug: $categorySlug }\n      id: $excludeId\n      limit: $limit\n      orderBy: \"postDate DESC\"\n    ) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n"): (typeof documents)["\n  query BlogRelatedArticles($categorySlug: [String], $excludeId: [QueryArgument], $limit: Int) {\n    entries(\n      section: \"blog\"\n      relatedToCategories: { slug: $categorySlug }\n      id: $excludeId\n      limit: $limit\n      orderBy: \"postDate DESC\"\n    ) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BlogArticles($limit: Int, $offset: Int, $categorySlug: [String]) {\n    blogEntries: entries(\n      section: \"blog\"\n      limit: $limit\n      offset: $offset\n      relatedToCategories: { slug: $categorySlug }\n      orderBy: \"postDate DESC\"\n    ) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n    entryCount(section: \"blog\", relatedToCategories: { slug: $categorySlug })\n  }\n"): (typeof documents)["\n  query BlogArticles($limit: Int, $offset: Int, $categorySlug: [String]) {\n    blogEntries: entries(\n      section: \"blog\"\n      limit: $limit\n      offset: $offset\n      relatedToCategories: { slug: $categorySlug }\n      orderBy: \"postDate DESC\"\n    ) {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n    entryCount(section: \"blog\", relatedToCategories: { slug: $categorySlug })\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BlogFeatured {\n    featuredEntry: entries(section: \"blog\", isFeatured: true, limit: 1, orderBy: \"postDate DESC\") {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n"): (typeof documents)["\n  query BlogFeatured {\n    featuredEntry: entries(section: \"blog\", isFeatured: true, limit: 1, orderBy: \"postDate DESC\") {\n      ... on blogArticle_Entry {\n        ...BlogListingEntry\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BlogCategories {\n    blogCategories: categories(group: \"blogCategories\") {\n      id\n      slug\n      title\n    }\n  }\n"): (typeof documents)["\n  query BlogCategories {\n    blogCategories: categories(group: \"blogCategories\") {\n      id\n      slug\n      title\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;