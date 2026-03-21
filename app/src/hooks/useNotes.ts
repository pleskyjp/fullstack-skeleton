import { useCallback, useEffect, useState } from 'react';
import '@/lib/apiClient';
import {
  getApiNotes,
  postApiNotes,
  putApiNotesById,
  deleteApiNotesById,
} from '@/api/generated';
import type { PostApiNotesResponses } from '@/api/generated';

type Note = PostApiNotesResponses[201];

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await getApiNotes();
      if (data) {
        setNotes(data.items);
        setTotal(data.total);
      }
    } catch {
      setError('Failed to load notes');
    } finally {
      setLoading(false);
    }
  }, []);

  const createNote = async (title: string, content: string) => {
    const { data } = await postApiNotes({ body: { title, content } });
    if (data) {
      setNotes(prev => [data, ...prev]);
      setTotal(prev => prev + 1);
    }
  };

  const updateNote = async (id: string, updates: { title?: string; content?: string; completed?: boolean }) => {
    const { data } = await putApiNotesById({ path: { id }, body: updates });
    if (data) setNotes(prev => prev.map(n => (n.id === id ? data : n)));
  };

  const toggleComplete = (id: string, completed: boolean) =>
    updateNote(id, { completed: !completed });

  const removeNote = async (id: string) => {
    await deleteApiNotesById({ path: { id } });
    setNotes(prev => prev.filter(n => n.id !== id));
    setTotal(prev => prev - 1);
  };

  useEffect(() => { fetchNotes(); }, [fetchNotes]);

  return { notes, total, loading, error, createNote, updateNote, toggleComplete, removeNote, refetch: fetchNotes };
};
