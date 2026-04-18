Deployment guide for patch set

- Frontend: Vercel
- Backend: Render
- Env vars expected:
  - NEXT_PUBLIC_API_BASE_URL
  - MONGODB_URI
  - JWT_SECRET
  - MAIL_* (optional)

Steps:
1) Commit patches 01-09 in order, run each patch in the repo root.
2) On Vercel, connect the repository and set the environment variables as per .env.example.
3) On Render, set the backend environment vars and connect to MongoDB Atlas.
