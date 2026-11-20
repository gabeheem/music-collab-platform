# Backend

Python and FastAPI backend for GitMusic. Right now it has a health endpoint.
Login, project storage, and version history still need to be added.

## Run it

Use Python 3.11 or newer. From the project folder:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
Copy-Item .env.example .env
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000
```

If you already have a `.env`, keep it instead of copying over it.
Using the virtual environment's Python directly avoids PowerShell activation settings.

On Mac or Linux, use `.venv/bin/python` instead of `.\.venv\Scripts\python.exe`
and `cp .env.example .env` to copy the settings file.

Open http://localhost:8000/api/health. You should get:

```json
{"status":"ok"}
```

Open http://localhost:8000/docs to see and try the API endpoints.
The health endpoint checks the server, not database connectivity.
Unknown routes return HTTP 404 with `{"error":"Route not found"}`.

`--reload` restarts the server when you save changes. Leave it out to run without
watching files. Stop the server with Ctrl+C. Use `--port` to choose another port.

If the old Node server is still running on port 8000, stop it in its terminal first.
The backend now runs with Python; npm is still used for the Angular frontend.

## Connecting the frontend

The API address is still `http://localhost:8000`.
The backend allows `http://localhost:4200`, Angular's usual development address.
Change `FRONTEND_URL` in `.env` if the frontend runs at a different address,
then restart the backend.

Each teammate needs to run the backend on their own computer when using localhost.
Keep `.env` and `.venv` out of GitHub. `.env.example` is safe to share.

Next up: agree on database tables, then add login and repository creation.
