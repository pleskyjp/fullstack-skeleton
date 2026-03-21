import { useTranslations } from 'next-intl';
import { formatDate } from '@/utils/formatDate';

type Note = {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  createdAt: string;
};

type Props = {
  note: Note;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
};

export const NoteCard = ({ note, onToggle, onDelete }: Props) => {
  const t = useTranslations('notes');

  return (
    <div className={`rounded-lg border p-4 transition ${note.completed ? 'border-gray-200 bg-gray-50' : 'border-gray-200 bg-white shadow-sm'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <button
            onClick={() => onToggle(note.id, note.completed)}
            className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition ${
              note.completed ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 hover:border-green-400'
            }`}
          >
            {note.completed && <span className="text-xs">&#10003;</span>}
          </button>
          <div className="min-w-0">
            <h3 className={`font-medium ${note.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>{note.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">{note.content}</p>
            <time className="mt-2 block text-xs text-gray-400">{formatDate(note.createdAt)}</time>
          </div>
        </div>
        <button onClick={() => onDelete(note.id)} className="flex-shrink-0 text-sm text-gray-400 transition hover:text-red-500">
          {t('delete')}
        </button>
      </div>
    </div>
  );
};
