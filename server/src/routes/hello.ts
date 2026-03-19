import { Router } from 'express';

const router = Router();

router.get('/hello', (_req, res) => {
  res.json({ message: 'Hello World' });
});

router.get('/goodbye', (_req, res) => {
  res.json({ message: 'Tschüss!' });
});

export default router;
