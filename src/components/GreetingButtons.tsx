interface GreetingButtonsProps {
  onGreeting: (type: 'hello' | 'goodbye') => void;
  loading: boolean;
}

export function GreetingButtons({ onGreeting, loading }: GreetingButtonsProps) {
  return (
    <div className="buttons">
      <button
        className="btn-hello"
        onClick={() => onGreeting('hello')}
        disabled={loading}
      >
        👋 Say Hello
      </button>
      <button
        className="btn-goodbye"
        onClick={() => onGreeting('goodbye')}
        disabled={loading}
      >
        👋 Say Goodbye
      </button>
    </div>
  );
}
