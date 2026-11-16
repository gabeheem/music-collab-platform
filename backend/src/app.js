import express from 'express';
import cors from 'cors';

export function createApp(frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:3000') {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors({
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type'],
  }));
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.use((_req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });

  return app;
}

