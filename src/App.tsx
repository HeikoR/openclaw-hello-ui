import { useState } from 'react';
import { GreetingButtons } from './components/GreetingButtons';
import { GreetingMessage } from './components/GreetingMessage';
import { useGreeting } from './hooks/useGreeting';

function App() {
  const [greetingType, setGreetingType] = useState<'hello' | 'goodbye' | null>(null);
  const { message, loading, error, fetchGreeting } = useGreeting();

  const handleGreeting = async (type: 'hello' | 'goodbye') => {
    setGreetingType(type);
    await fetchGreeting(type);
  };

  return (
    <div className="container">
      <h1>🦁 Hello World App</h1>
      <p className="subtitle">Powered by Seven & React</p>

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
