const API_BASE = import.meta.env.VITE_API_URL || '';

export async function fetchHello(): Promise<string> {
  const res = await fetch(`${API_BASE}/api/hello`);
  if (!res.ok) throw new Error('Failed to fetch hello');
  const data = await res.json();
  return data.message as string;
}

export async function fetchGoodbye(): Promise<string> {
  const res = await fetch(`${API_BASE}/api/goodbye`);
  if (!res.ok) throw new Error('Failed to fetch goodbye');
  const data = await res.json();
  return data.message as string;
}
