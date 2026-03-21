import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';

type Props = {
  onSubmit: (title: string, content: string) => Promise<void>;
};

export const NoteForm = ({ onSubmit }: Props) => {
  const t = useTranslations('notes');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setSubmitting(true);
    try {
      await onSubmit(title.trim(), content.trim());
      setTitle('');
      setContent('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <input
        type="text"
        placeholder={t('titlePlaceholder')}
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="mb-3 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={200}
        required
      />
      <textarea
        placeholder={t('contentPlaceholder')}
        value={content}
        onChange={e => setContent(e.target.value)}
        className="mb-3 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
        required
      />
      <button
        type="submit"
        disabled={submitting || !title.trim() || !content.trim()}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? t('creating') : t('createNote')}
      </button>
    </form>
  );
};
