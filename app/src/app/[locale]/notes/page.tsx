'use client';

import { useTranslations } from 'next-intl';

import { NoteList } from '@/components/notes/NoteList';

const NotesPage = () => {
  const t = useTranslations('notes');

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">{t('title')}</h1>
      <NoteList />
    </main>
  );
};

export default NotesPage;
