import { useState, useEffect } from 'react';
import { GreetingButtons } from './components/GreetingButtons';
import { GreetingMessage } from './components/GreetingMessage';
import { useGreeting } from './hooks/useGreeting';

const APP_VERSION = '1.0.4';
const API_URL = import.meta.env.VITE_API_URL || '(not set)';

function App() {
  const [greetingType, setGreetingType] = useState<'hello' | 'goodbye' | 'party' | null>(null);
  const { message, loading, error, fetchGreeting } = useGreeting();

  useEffect(() => {
    console.log(`[🦁 App v${APP_VERSION}] API_URL: ${API_URL}`);
  }, []);

  const handleGreeting = async (type: 'hello' | 'goodbye' | 'party') => {
    setGreetingType(type);
    await fetchGreeting(type);
  };

  return (
    <div className="container">
      <h1>🦁 Hello World App</h1>
      <p className="subtitle">Powered by Seven & React <code>v{APP_VERSION}</code></p>

      <GreetingButtons onGreeting={handleGreeting} loading={loading} />

      <GreetingMessage
        type={greetingType}
        message={message}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
