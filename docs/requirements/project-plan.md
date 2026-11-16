# GitMusic project plan

Updated November 16, 2026.

Reference: Git but for music brainstorm doc (5).pdf, supplied by the user.
This replaces the older plan based on version (3).

## Current choices

- Frontend: Angular and TypeScript, owned by the frontend teammate. Node.js is also used for its development tools.
- Backend: Node.js and Express, using the current JavaScript starter.
- Database: PostgreSQL through Supabase.
- Accounts: Supabase Auth.
- Source code: gabeheem/music-collab-platform on GitHub, using branches and pull requests.

The user explicitly confirmed that the Python/FastAPI line on page 17 is outdated.
The earlier Next.js frontend and Next.js API plan is superseded.
Keep code and documentation simple and natural, with enough detail for teammates to run and understand them.

## Requirements to track

| PDF requirements | Work needed |
| --- | --- |
| 1.1-1.3 Accounts | Sign up, sign in, edit own profile |
| 2.1-2.2 Repositories | Create a named project with information; owner adds registered collaborators with access roles |
| 2.3 Files | Authorized collaborators add supported project files |
| 2.4 Plugins | Add, view, update plugin information |
| 3.1-3.3 Commits | Save changes with a message, view history, inspect an old project state |
| 3.4-3.5 Restore and compare | Restore a selected state; show added, removed, and modified files between commits |
| 3.6-3.8 Branches and merge | Branch from an existing state, commit independently, preview and confirm a merge into a destination branch |
| 4.1 Push | Select local changes, validate permissions and files, upload them, show the outcome |
| 4.2 Pull | Check access, download the requested files to the user's device, show the outcome |
| 5.1-5.3 Publication | Publish a selected completed version; browse and play published tracks |
| 6.1-6.2 Social | Registered users can like and comment on published tracks |

Support DAW project files, samples, stems, rendered audio, plugin information,
and project metadata. Store files from different DAWs without assuming the app
can open or render their native formats. Supported extensions and size limits
still need a team decision; examples in the PDF are not an exhaustive allowlist.

## Data to preserve

Use the PDF data dictionary as the starting point:

- User: ID, username, email, join date, profile description, managed account credentials.
- Repository: ID, name, description, owner, creation date, public/private visibility.
- Collaborator: user, repository, role, date added.
- Project file: ID, name, type, size, relative location, upload date.
- Commit: ID, message, author, date, preceding history, saved project state.
- Branch: ID, name, repository, creator, creation date, latest commit.
- Plugin: name, optional version, manufacturer, type, repository association.
- Published track: ID, title, artist, description, genre, audio, publication date, source commit.
- Like: user, track, date.
- Comment: ID, user, track, text, date.

Physical tables may split these records into file versions and commit manifests.
Keep the required information and relationships. Merges may need two parent
links rather than only the dictionary's single Previous Commit field.
Supabase Auth manages credentials; do not put plaintext or reversibly encrypted
passwords in the application tables. The PDF's password-security goal should be
met through secure password hashing managed by Auth.

## Behavior and quality

Check repository permissions on protected operations and prevent changes to
another user's account. Validate uploads. Persist data across sessions and
server restarts. Give the user clear success/failure feedback. All main features
must be accessible through the GUI. Agree on the supported modern desktop browsers.

The PDF describes push/upload and creating a commit as separate flows. Keep
those meanings distinct: uploading selected changes should not silently create
a commit. Pull means an explicit download; automatic folder synchronization is
not a stated requirement. A ZIP download is an implementation proposal.

Keep historical file versions unchanged. Restore-as-new-commit, private object
storage, branch-head conflict checks, and whole-file merge selection are useful
implementation proposals, not extra requirements stated by the PDF. Document
these decisions when the team adopts them. Never imply automatic audio mixing.
A published track stays associated with its selected source commit.

Use the profile, repository, and explore mockups on pages 15-16 as UI references.
Use the diagrams on pages 20-23 alongside the written requirements. Resolve
unclear diagram details with the team instead of inventing behavior.

## Work order and current status

The backend starter provides GET /api/health, local CORS configuration, and run
instructions. It does not yet implement any of the functional requirements above.
The document is the target scope, not a description of completed features.

1. Everyone runs their part locally and agrees on API payloads and schema.
2. Sign in, create a repository, add a collaborator, check permissions.
3. Upload files, create two commits, inspect history, download either saved state.
4. Add comparisons, restoration, branches, and confirmed merges.
5. Publish a selected version, then discovery, playback, likes, comments, and profiles.
6. Check every requirement against working UI/API behavior and permission tests.

All listed requirements remain in scope even when scheduled later. This ordering
is a proposed build sequence, not a deadline or permission to drop features.

The user owns backend and version control. The frontend teammate owns UI setup.
Coordinate schema and music features with their owners. Review each other's PRs.
PR #1's Next.js/Python scaffold needs reconciliation with Angular/Node before
merging. PR #2's Node backend starter is now merged into main. Main also has an Angular
starter with a placeholder track component. Do not merge incompatible scaffolds
without resolving the overlap.
