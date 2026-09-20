# Manash Madhukar — Portfolio

```
manash-full-project/
├── frontend/   ← React + Vite + Framer Motion
└── backend/    ← Django (saves contact form → Excel)
```

---

## How to Run (2 terminals)

### Terminal 1 — Backend (Django)

```bash
cd backend
pip install -r requirements.txt
python manage.py runserver 8000
```

Backend runs at → http://localhost:8000
API endpoints:
- POST http://localhost:8000/api/contact/      ← contact form
- GET  http://localhost:8000/api/submissions/  ← view all messages
- GET  http://localhost:8000/api/health/       ← health check

### Terminal 2 — Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at → http://localhost:5173

The frontend's vite.config.js already has a proxy set up:
any /api/* call from React is automatically forwarded to Django on port 8000.
You don't need to change any URLs.

---

## How it works

1. User fills contact form on the React site
2. React POSTs to /api/contact/ (proxied to Django)
3. Django validates the data
4. Django appends a row to backend/contact_submissions.xlsx
5. Toast shows on frontend: "Message sent!"

Open contact_submissions.xlsx in Excel anytime to see all submissions.

---

## Build for Production

```bash
# Build React into static files
cd frontend
npm run build
# Output is in frontend/dist/

# Run Django in production
cd backend
gunicorn manage:application --bind 0.0.0.0:8000
```

---

## Deploy (Render — free tier)

**Backend:**
- New Web Service → connect your GitHub repo
- Root directory: `backend`
- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn manage:application`

**Frontend:**
- New Static Site → connect repo
- Root directory: `frontend`
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Add env var: `VITE_API_URL=https://your-backend.onrender.com`

---

## Edit Content

All portfolio content (projects, skills, games, links) is in:
```
frontend/src/data/index.js
```
Edit and save — Vite hot reloads instantly.
