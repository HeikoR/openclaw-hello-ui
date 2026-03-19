interface GreetingMessageProps {
  type: 'hello' | 'goodbye' | 'party' | null;
  message: string;
  loading: boolean;
  error: string | null;
}

export function GreetingMessage({ type, message, loading, error }: GreetingMessageProps) {
  if (loading) {
    return <div className="message loading">Loading...</div>;
  }

  if (error) {
    return <div className="message error">❌ {error}</div>;
  }

  if (!type || !message) {
    return <div className="message">Click a button to get a greeting!</div>;
  }

  return (
    <div className={`message ${type}`}>
      {type === 'party' ? '🎉' : '👋'} {message}
    </div>
  );
}
