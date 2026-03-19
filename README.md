# Hello World App

A minimal full-stack TypeScript application with a React frontend and Express backend.

## Project Structure

```
hello-world-app/
├── client/          # React + Vite frontend
├── server/          # Express.js backend
└── README.md
```

## Setup

### Prerequisites

- Node.js 20+
- npm or pnpm

### Backend

```bash
cd server
npm install
npm run dev        # Starts on http://localhost:3001
```

### Frontend

```bash
cd client
npm install
npm run dev        # Starts on http://localhost:5173
```

## API Endpoints

| Method | Endpoint   | Response                        |
|--------|------------|---------------------------------|
| GET    | `/api/hello`  | `{ "message": "Hello World" }`  |
| GET    | `/api/goodbye`| `{ "message": "Tschüss!" }`     |

## Running Tests

### Backend

```bash
cd server
npm test
```

### Frontend

```bash
cd client
npm test
```

## Deployment

### Frontend

The frontend deploys to **Vercel** automatically on push to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HeikoR/hello-world-app)

### Backend

Deploy to **Render**, **Railway**, or **Fly.io`:

[![Deploy to Render](https://render.com/image/deploy-to-render-button)](https://render.com/deploy)

## Environment Variables

### Server (.env)

```
PORT=3001
NODE_ENV=development
```

### Client (.env)

```
VITE_API_URL=http://localhost:3001
```

## Tech Stack

- **Frontend:** React 18, Vite, TypeScript, Vitest
- **Backend:** Express.js, TypeScript, Jest, Supertest
- **Deploy:** Vercel (frontend), Render (backend)
