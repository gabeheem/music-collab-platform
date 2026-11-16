# GitMusic backend

Node.js + Express API (JavaScript). This preparation implements process health only.
Authentication, database access, repositories, uploads, and version history are next.

## Start on Windows PowerShell

Install Node.js 22.9 or newer. From the repository root:

```powershell
cd backend
npm ci
Copy-Item .env.example .env
npm run dev
```

On macOS/Linux use `cp .env.example .env` instead of `Copy-Item`.
Environment settings are loaded automatically. No Supabase credentials are needed yet.
Stop the server with Ctrl+C.

## Check it

```powershell
Invoke-RestMethod http://localhost:8000/api/health
```

Expected JSON: `{"status":"ok"}`. This checks the server, not database connectivity.
Unknown routes return HTTP 404 with `{"error":"Route not found"}`.

## Run without watch mode

```powershell
npm start
```

## Frontend handoff

- API base URL: `http://localhost:8000`.
- Angular: configure your frontend API base URL as `http://localhost:8000` using Angular configuration.
- Allowed browser origin defaults to `http://localhost:3000`. For Angular at port 4200, set `FRONTEND_URL=http://localhost:4200` in backend `.env` and restart the backend.
- Browser check: `fetch("http://localhost:8000/api/health").then(r => r.json())`.
- CORS controls browser access; it does not replace authentication or repository permissions.

## Next implementation tasks

1. Agree on repository, membership, file, commit, snapshot, and branch tables with the database teammate.
2. Validate Supabase Auth tokens and check repository membership in the API.
3. Implement repository creation/listing, then private uploads and immutable snapshots.
4. Demonstrate two commits downloading the correct file versions, with unauthorized access rejected.

Keep API routes in `src/app.js` initially; split routes and services as features grow.
Keep secrets in backend `.env` and never put privileged credentials in frontend environment variables.



