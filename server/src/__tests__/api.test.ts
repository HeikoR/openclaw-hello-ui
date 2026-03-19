import request from 'supertest';
import app from '../index';

describe('GET /api/hello', () => {
  it('returns Hello World message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello World' });
  });
});

describe('GET /api/goodbye', () => {
  it('returns goodbye message in German', async () => {
    const res = await request(app).get('/api/goodbye');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Tschüss!' });
  });
});

describe('GET /health', () => {
  it('returns ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('404 handler', () => {
  it('returns 404 for unknown routes', async () => {
    const res = await request(app).get('/api/nonexistent');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Not found' });
  });
});
