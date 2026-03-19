# Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HeikoR/openclaw-hello-ui&project-name=openclaw-hello-world&framework=vite)

## Oder manuell:

1. Gehe zu https://vercel.com/new
2. Importiere `HeikoR/openclaw-hello-ui` von GitHub
3. Framework wird automatisch erkannt als **Vite**
4. Deploy klicken

## Nach Deploy:

Sobald Backend (Cloudflare Worker) deployed ist, `VITE_API_URL` in Vercel Project Settings → Environment Variables setzen:
```
VITE_API_URL=https://your-worker.your-username.workers.dev
```
