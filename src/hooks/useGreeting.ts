import { useState, useCallback } from 'react';

interface UseGreetingReturn {
  message: string;
  loading: boolean;
  error: string | null;
  fetchGreeting: (type: 'hello' | 'goodbye') => Promise<void>;
}

export function useGreeting(): UseGreetingReturn {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGreeting = useCallback(async (type: 'hello' | 'goodbye') => {
    setLoading(true);
    setError(null);
    setMessage('');

    try {
      const res = await fetch(`/api/${type}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { message, loading, error, fetchGreeting };
}
