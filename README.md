# Hospital Appointment System

## Backend (Rails 8 API)
Located in `backend/`.
**Note:** There is a known issue with Database connection on this environment.
- PostgreSQL fails with "server closed connection unexpectedly".
- SQLite3 fails with "LoadError: 127: The specified procedure could not be found".
The code is written assuming a working Database.

## Frontend (React + Vite)
Located in `frontend/`.
Uses Tailwind CSS for styling.
Uses Cypress + Cucumber for testing.

## Setup
1. Backend:
   ```bash
   cd backend
   bundle install
   # Fix DB issue then run:
   rails db:create db:migrate
   rails s
   ```
2. Frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
## Etik Bildirimi (Zorunlu)

Bu proje, Samsun Üniversitesi Yazılım Mühendisliği Bölümü **"Yazılım Gerçekleşme ve Test"** dersi kapsamında  
**Nurettin Şenyer** ve **Ömer Durmuş** rehberliğinde yapılmıştır.
