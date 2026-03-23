import '@/lib/apiClient';

import { useCallback, useEffect, useState } from 'react';

import { deleteApiNotesById, getApiNotes, postApiNotes, putApiNotesById } from '@/api/generated';
import type { Note } from '@/api/generated/types.gen';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchNotes = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await getApiNotes();
      if (data) {
        setNotes(data.items);
        setTotal(data.total);
      }
    } catch (err) {
      console.error('[useNotes] fetchNotes failed:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const createNote = async (title: string, content: string) => {
    try {
      const { data } = await postApiNotes({ body: { title, content } });
      if (data) {
        setNotes(prev => [data, ...prev]);
        setTotal(prev => prev + 1);
      }
    } catch (err) {
      console.error('[useNotes] createNote failed:', err);
    }
  };

  const updateNote = async (id: string, updates: { title?: string; content?: string; completed?: boolean }) => {
    try {
      const { data } = await putApiNotesById({ path: { id }, body: updates });
      if (data) setNotes(prev => prev.map(n => (n.id === id ? data : n)));
    } catch (err) {
      console.error('[useNotes] updateNote failed:', err);
    }
  };

  const toggleComplete = (id: string, completed: boolean) => updateNote(id, { completed: !completed });

  const removeNote = async (id: string) => {
    try {
      await deleteApiNotesById({ path: { id } });
      setNotes(prev => prev.filter(n => n.id !== id));
      setTotal(prev => prev - 1);
    } catch (err) {
      console.error('[useNotes] removeNote failed:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return { notes, total, loading, error, createNote, updateNote, toggleComplete, removeNote, refetch: fetchNotes };
};
