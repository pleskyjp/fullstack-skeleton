import { useTranslations } from 'next-intl';
import { NoteCard } from './NoteCard';
import { NoteForm } from './NoteForm';
import { useNotes } from '@/hooks/useNotes';

export const NoteList = () => {
  const t = useTranslations('notes');
  const { notes, total, loading, error, createNote, toggleComplete, removeNote } = useNotes();

  return (
    <div>
      <NoteForm onSubmit={createNote} />

      {loading && <p className="py-8 text-center text-gray-500">{t('loading')}</p>}
      {error && <p className="py-8 text-center text-red-500">{t('loadError')}</p>}

      {!loading && !error && (
        <>
          <div className="space-y-3">
            {notes.map(note => (
              <NoteCard key={note.id} note={note} onToggle={toggleComplete} onDelete={removeNote} />
            ))}
          </div>

          {notes.length === 0 && <p className="py-8 text-center text-gray-400">{t('empty')}</p>}

          {total > 0 && <p className="mt-6 text-center text-sm text-gray-400">{t('count', { count: total })}</p>}
        </>
      )}
    </div>
  );
};
