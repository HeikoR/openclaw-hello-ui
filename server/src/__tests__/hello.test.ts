import request from 'supertest';
import { app } from '../index';
import helloRoutes from '../routes/hello';

// Mount the routes for testing
app.use('/api', helloRoutes);

describe('GET /api/hello', () => {
  it('returns Hello World message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello World' });
  });
});

describe('GET /api/goodbye', () => {
  it('returns Tschüss message', async () => {
    const res = await request(app).get('/api/goodbye');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Tschüss!' });
  });
});
