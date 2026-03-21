const en = {
  app: {
    name: 'Fullstack Skeleton',
  },
  nav: {
    home: 'Home',
    blog: 'Blog',
    notes: 'Notes',
  },
  home: {
    title: 'Fullstack Skeleton',
    subtitle: 'Production-ready fullstack template with React, Next.js, Express, and CraftCMS.',
    serverComponents: 'Server Components + GraphQL',
    clientComponents: 'Client Components + REST',
    blogDescription: 'CraftCMS-powered blog with Server Components, GraphQL codegen, and content block rendering.',
    notesDescription: 'Full CRUD with Express API, Prisma ORM, OpenAPI codegen, and client-side React hooks.',
  },
  blog: {
    title: 'Blog',
    readArticle: 'Read article',
    noArticles: 'No articles to display',
    showingArticles: 'Showing {shown} of {total} articles',
    allCategories: 'All',
    backToBlog: 'Back to blog',
    articleNotFound: 'Article not found',
    relatedArticles: 'Related articles',
    share: 'Share',
  },
  notes: {
    title: 'Notes',
    createNote: 'Create Note',
    creating: 'Creating...',
    titlePlaceholder: 'Note title',
    contentPlaceholder: 'Write your note...',
    delete: 'Delete',
    loading: 'Loading notes...',
    loadError: 'Failed to load notes',
    empty: 'No notes yet. Create your first one!',
    count: '{count, plural, one {# note} other {# notes}}',
  },
} as const;

export default en;
