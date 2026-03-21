export type ServerOption = 'cloudflare' | 'nestjs';

export const SERVERS: Record<ServerOption, { name: string; baseUrl: string }> = {
  cloudflare: {
    name: 'Server 1 (Cloudflare)',
    baseUrl: 'https://openclaw-hello-backend.hwrweb.workers.dev',
  },
  nestjs: {
    name: 'Server 2 (NestJS)',
    baseUrl: 'https://openclaw-hello-backend-nestjs.vercel.app',
  },
};

export async function fetchHello(baseUrl: string): Promise<string> {
  const res = await fetch(`${baseUrl}/api/hello`);
  if (!res.ok) throw new Error('Failed to fetch hello');
  const data = await res.json();
  return data.message as string;
}

export async function fetchGoodbye(baseUrl: string): Promise<string> {
  const res = await fetch(`${baseUrl}/api/goodbye`);
  if (!res.ok) throw new Error('Failed to fetch goodbye');
  const data = await res.json();
  return data.message as string;
}

export async function fetchParty(baseUrl: string): Promise<string> {
  const res = await fetch(`${baseUrl}/api/party`);
  if (!res.ok) throw new Error('Failed to fetch party');
  const data = await res.json();
  return data.message as string;
}
