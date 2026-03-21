import { graphql } from './generated';

export const BLOG_LISTING_ENTRY_FRAGMENT = graphql(`
  fragment BlogListingEntry on blogArticle_Entry {
    id
    slug
    title
    postDate
    perex
    isFeatured
    featuredImage {
      url
      width
      height
    }
    blogCategory {
      id
      slug
      title
    }
  }
`);

export const BLOG_ARTICLE_DETAIL_QUERY = graphql(`
  query BlogArticleDetail($slug: [String]) {
    entry(section: "blog", slug: $slug) {
      ... on blogArticle_Entry {
        ...BlogListingEntry
        metaTitle
        metaDescription
        articleContent {
          __typename
          ... on heading_Entry {
            text
          }
          ... on textBlock_Entry {
            body {
              html
            }
          }
          ... on checklist_Entry {
            items {
              text
            }
          }
          ... on bulletList_Entry {
            items {
              text
            }
          }
          ... on numberedList_Entry {
            items {
              text
            }
          }
          ... on quote_Entry {
            text
            authorPhoto {
              url
            }
            authorName
            authorPosition
          }
          ... on imageWithCaption_Entry {
            image {
              url
              width
              height
            }
            caption
          }
          ... on youtubeEmbed_Entry {
            videoUrl {
              url
            }
          }
          ... on authorCard_Entry {
            title
            photo {
              url
            }
            position
            bio
          }
        }
      }
    }
  }
`);

export const BLOG_ARTICLE_DETAIL_NO_CONTENT_QUERY = graphql(`
  query BlogArticleDetailNoContent($slug: [String]) {
    entry(section: "blog", slug: $slug) {
      ... on blogArticle_Entry {
        ...BlogListingEntry
      }
    }
  }
`);

export const BLOG_RELATED_ARTICLES_QUERY = graphql(`
  query BlogRelatedArticles($categorySlug: [String], $excludeId: [QueryArgument], $limit: Int) {
    entries(
      section: "blog"
      relatedToCategories: { slug: $categorySlug }
      id: $excludeId
      limit: $limit
      orderBy: "postDate DESC"
    ) {
      ... on blogArticle_Entry {
        ...BlogListingEntry
      }
    }
  }
`);

export const BLOG_ARTICLES_QUERY = graphql(`
  query BlogArticles($limit: Int, $offset: Int, $categorySlug: [String]) {
    blogEntries: entries(
      section: "blog"
      limit: $limit
      offset: $offset
      relatedToCategories: { slug: $categorySlug }
      orderBy: "postDate DESC"
    ) {
      ... on blogArticle_Entry {
        ...BlogListingEntry
      }
    }
    entryCount(section: "blog", relatedToCategories: { slug: $categorySlug })
  }
`);

export const BLOG_FEATURED_QUERY = graphql(`
  query BlogFeatured {
    featuredEntry: entries(section: "blog", isFeatured: true, limit: 1, orderBy: "postDate DESC") {
      ... on blogArticle_Entry {
        ...BlogListingEntry
      }
    }
  }
`);

export const BLOG_CATEGORIES_QUERY = graphql(`
  query BlogCategories {
    blogCategories: categories(group: "blogCategories") {
      id
      slug
      title
    }
  }
`);
