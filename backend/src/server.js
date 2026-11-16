import { createApp } from './app.js';

const port = Number(process.env.PORT ?? 8000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535');
}

const server = createApp().listen(port, () => {
  console.log(`GitMusic API listening on http://localhost:${port}`);
});

server.on('error', (error) => {
  console.error('Unable to start GitMusic API:', error.message);
  process.exitCode = 1;
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    server.close(() => process.exit(0));
  });
}

