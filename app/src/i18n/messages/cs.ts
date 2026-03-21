const cs = {
  app: {
    name: 'Fullstack Skeleton',
  },
  nav: {
    home: 'Domů',
    blog: 'Blog',
    notes: 'Poznámky',
  },
  home: {
    title: 'Fullstack Skeleton',
    subtitle: 'Produkční šablona pro fullstack vývoj s React, Next.js, Express a CraftCMS.',
    serverComponents: 'Server Components + GraphQL',
    clientComponents: 'Client Components + REST',
    blogDescription: 'Blog poháněný CraftCMS se Server Components, GraphQL codegen a renderováním obsahových bloků.',
    notesDescription: 'Plný CRUD s Express API, Prisma ORM, OpenAPI codegen a client-side React hooks.',
  },
  blog: {
    title: 'Blog',
    readArticle: 'Číst článek',
    noArticles: 'Žádné články k zobrazení',
    showingArticles: 'Zobrazeno {shown} z {total} článků',
    allCategories: 'Vše',
    backToBlog: 'Zpět na blog',
    articleNotFound: 'Článek nenalezen',
    relatedArticles: 'Související články',
    share: 'Sdílet',
  },
  notes: {
    title: 'Poznámky',
    createNote: 'Vytvořit poznámku',
    creating: 'Vytváření...',
    titlePlaceholder: 'Název poznámky',
    contentPlaceholder: 'Napište svou poznámku...',
    delete: 'Smazat',
    loading: 'Načítání poznámek...',
    loadError: 'Nepodařilo se načíst poznámky',
    empty: 'Zatím žádné poznámky. Vytvořte první!',
    count: '{count, plural, one {# poznámka} few {# poznámky} other {# poznámek}}',
  },
} as const;

export default cs;
