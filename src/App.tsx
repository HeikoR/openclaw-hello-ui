import { useState } from 'react';
import { GreetingButtons } from './components/GreetingButtons';
import { GreetingMessage } from './components/GreetingMessage';
import { useGreeting } from './hooks/useGreeting';
import { ServerOption, SERVERS } from './api/index';

const APP_VERSION = '1.0.5';

function App() {
  const [greetingType, setGreetingType] = useState<'hello' | 'goodbye' | 'party' | null>(null);
  const { message, loading, error, server, setServer, fetchGreeting } = useGreeting();

  const handleGreeting = async (type: 'hello' | 'goodbye' | 'party') => {
    setGreetingType(type);
    await fetchGreeting(type);
  };

  return (
    <div className="container">
      <h1>🦁 Hello World App</h1>
      <p className="subtitle">Powered by Seven & React <code>v{APP_VERSION}</code></p>

      <div className="server-selector">
        <label htmlFor="server-select">Backend: </label>
        <select
          id="server-select"
          value={server}
          onChange={(e) => setServer(e.target.value as ServerOption)}
        >
          {Object.entries(SERVERS).map(([key, { name }]) => (
            <option key={key} value={key}>{name}</option>
          ))}
        </select>
      </div>

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
