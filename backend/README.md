# Backend

Node.js and Express backend for GitMusic. Right now it has a health endpoint.
Login, project storage, and version history still need to be added.

## Run it

Use Node.js 22.9 or newer. From the project folder:

```powershell
cd backend
npm ci
Copy-Item .env.example .env
npm run dev
```

On Mac or Linux, use `cp .env.example .env` to copy the file.
If you already have a `.env`, keep it instead of copying over it.

Open http://localhost:8000/api/health. You should get:

```json
{"status":"ok"}
```

`npm run dev` restarts the server when you save changes. Use `npm start` to
run it without watching files. Stop it with Ctrl+C.

## Connecting the frontend

The API runs at `http://localhost:8000` by default. Set the frontend's API URL
to that address.

If Angular runs on port 4200, change this line in the backend `.env`:

```env
FRONTEND_URL=http://localhost:4200
```

Restart the backend after changing `.env`. Use the actual frontend address
if it runs on a different port. `PORT` sets the backend port.

Each teammate needs to run the backend on their own computer when using localhost.
Keep `.env` and `node_modules` out of GitHub. The `.env.example` file is safe to share.

Next up: agree on the database tables, then add login and project creation.
