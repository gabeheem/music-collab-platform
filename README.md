# GitMusic

A collaborative platform for music creators. The plan is to support music repositories, project files, commits, branches, and collaboration, along with publishing finished tracks for others to discover.

This is the starting structure. It runs locally, but accounts, database access, uploads, version control, and publishing are not implemented yet.

## Stack

| Part | Tool |
| --- | --- |
| Frontend | Next.js + TypeScript |
| Backend | Python + FastAPI |
| Database | PostgreSQL through Supabase |
| Accounts | Supabase Auth |
| Team workflow | GitHub, feature branches, pull requests |

## Run locally

Install Node.js 22 or newer and Python 3.11 or newer. Start the backend and frontend in separate terminals. Supabase credentials are not needed to run this scaffold.

### Backend

From the repository root:

```sh
cd backend
python -m venv .venv
```

Activate the environment on Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
Copy-Item .env.example .env
```

On macOS/Linux:

```sh
source .venv/bin/activate
cp .env.example .env
```

Then:

```sh
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --env-file .env
```

The API runs at http://localhost:8000. Check `/api/health` for `{"status":"ok"}`, or open `/docs` for the FastAPI API documentation. Health checks the running process only, not a database connection.

### Frontend

In a second terminal, from the repository root:

```sh
cd frontend
npm ci
```

Copy `.env.example` to `.env.local` (`Copy-Item .env.example .env.local` in PowerShell, or `cp .env.example .env.local` on macOS/Linux), then:

```sh
npm run dev
```

Open http://localhost:3000. Home, repositories, explore, profile, and login are simple page placeholders. They do not load or save data yet. The frontend API URL is reserved for connecting these pages to FastAPI.

### Checks

From `frontend`:

```sh
npm run typecheck
npm run build
```

## Layout

```text
frontend/src/app/  Next.js pages and shared styling
backend/app/       FastAPI application
docs/              Requirements, diagrams, mockups, meetings, and testing notes
```

Keep application APIs in FastAPI. Next.js handles the frontend. Add database tables and authentication checks when starting those tasks; there are no database migrations in this scaffold.

## First tasks

| Area | First goal |
| --- | --- |
| Frontend, login, repository screens | Sign in and create/open a repository |
| Backend, database, authentication, permissions | Owner can add an editor; outsiders cannot access the repository |
| Uploads, storage, commits, history, downloads | Save two versions and download the correct files from each |
| Branches, comparisons, restore, merge | Create a branch and restore an old version as a new commit |
| Publishing, discovery, playback, social features | Publish audio from a saved version and play it |

Use a feature branch for each task and open a pull request when it is ready for review. Keep local environment files out of Git. Supabase database credentials and any privileged keys belong only in the backend environment.
