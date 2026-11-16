import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException

# Read local settings from backend/.env. Existing environment variables take priority.
load_dotenv(Path(__file__).resolve().parents[1] / ".env")


def create_app(frontend_url: str | None = None) -> FastAPI:
    # Set up the API separately so it can also be used in tests.
    api = FastAPI(title="GitMusic API", version="0.1.0")
    origin = frontend_url or os.getenv("FRONTEND_URL", "http://localhost:4200")

    # Allow the Angular frontend to read responses in the browser.
    # CORS doesn't check user permissions. Login checks will be added later.
    api.add_middleware(
        CORSMiddleware,
        allow_origins=[origin],
        allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE"],
        allow_headers=["Authorization", "Content-Type"],
    )

    @api.get("/api/health")
    def health() -> dict[str, str]:
        # Confirm the server is running. This doesn't check the database yet.
        return {"status": "ok"}

    @api.exception_handler(HTTPException)
    async def http_error(_request: Request, error: HTTPException) -> JSONResponse:
        # Keep the same unknown-route response as the original backend.
        message = "Route not found" if error.status_code == 404 else error.detail
        return JSONResponse(
            status_code=error.status_code,
            content={"error": message},
            headers=error.headers,
        )

    return api


# Uvicorn uses this object when starting app.main:app.
app = create_app()
