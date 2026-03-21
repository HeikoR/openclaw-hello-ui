import { useState, useCallback } from 'react';
import { fetchHello, fetchGoodbye, fetchParty, ServerOption, SERVERS } from '../api/index';

interface UseGreetingReturn {
  message: string;
  loading: boolean;
  error: string | null;
  server: ServerOption;
  setServer: (s: ServerOption) => void;
  fetchGreeting: (type: 'hello' | 'goodbye' | 'party') => Promise<void>;
}

export function useGreeting(initialServer: ServerOption = 'cloudflare'): UseGreetingReturn {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [server, setServer] = useState<ServerOption>(initialServer);

  const fetchGreeting = useCallback(async (type: 'hello' | 'goodbye' | 'party') => {
    setLoading(true);
    setError(null);
    setMessage('');

    try {
      const baseUrl = SERVERS[server].baseUrl;
      const message = type === 'hello'
        ? await fetchHello(baseUrl)
        : type === 'goodbye'
        ? await fetchGoodbye(baseUrl)
        : await fetchParty(baseUrl);
      setMessage(message);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [server]);

  return { message, loading, error, server, setServer, fetchGreeting };
}
