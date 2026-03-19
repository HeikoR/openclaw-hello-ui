import { useState, useCallback } from 'react';
import { fetchHello, fetchGoodbye, fetchParty } from '../api/index';

interface UseGreetingReturn {
  message: string;
  loading: boolean;
  error: string | null;
  fetchGreeting: (type: 'hello' | 'goodbye' | 'party') => Promise<void>;
}

export function useGreeting(): UseGreetingReturn {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGreeting = useCallback(async (type: 'hello' | 'goodbye' | 'party') => {
    setLoading(true);
    setError(null);
    setMessage('');

    try {
      const message = type === 'hello' 
        ? await fetchHello() 
        : type === 'goodbye'
        ? await fetchGoodbye()
        : await fetchParty();
      setMessage(message);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { message, loading, error, fetchGreeting };
}
