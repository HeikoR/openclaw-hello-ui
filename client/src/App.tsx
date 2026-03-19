import { useState } from 'react';
import { fetchHello, fetchGoodbye } from './api';

type Message = string | null;
type Loading = 'hello' | 'goodbye' | null;
type Error = string | null;

function App() {
  const [message, setMessage] = useState<Message>(null);
  const [loading, setLoading] = useState<Loading>(null);
  const [error, setError] = useState<Error>(null);

  const handleHello = async () => {
    setLoading('hello');
    setError(null);
    setMessage(null);
    try {
      const msg = await fetchHello();
      setMessage(msg);
    } catch {
      setError('Could not reach the server!');
    } finally {
      setLoading(null);
    }
  };

  const handleGoodbye = async () => {
    setLoading('goodbye');
    setError(null);
    setMessage(null);
    try {
      const msg = await fetchGoodbye();
      setMessage(msg);
    } catch {
      setError('Could not reach the server!');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="container">
      <h1>🦁 Hello World App</h1>
      <div className="buttons">
        <button
          className="btn-hello"
          onClick={handleHello}
          disabled={loading !== null}
        >
          {loading === 'hello' ? 'Loading...' : 'Say Hello'}
        </button>
        <button
          className="btn-goodbye"
          onClick={handleGoodbye}
          disabled={loading !== null}
        >
          {loading === 'goodbye' ? 'Loading...' : 'Say Goodbye'}
        </button>
      </div>
      <div className={`response ${error ? 'error' : ''}`}>
        {loading ? (
          <span className="loading">Loading...</span>
        ) : error ? (
          <span>{error}</span>
        ) : message ? (
          <span>{message}</span>
        ) : (
          <span style={{ color: '#9ca3af' }}>Press a button</span>
        )}
      </div>
    </div>
  );
}

export default App;
