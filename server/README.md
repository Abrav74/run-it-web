Run-It Server

This folder contains a minimal Express + TypeScript backend that connects to MongoDB.

Quick start

1. cd server
2. cp .env.example .env and set MONGODB_URI (MongoDB connection string)
3. npm install
4. npm run dev    # for development (auto-restarts)

Available scripts

- npm run dev : start dev server with ts-node-dev
- npm run build: compile to JavaScript in /dist
- npm start : run built JS from /dist

Endpoints

- GET /api/users  => list users
- POST /api/users => create user (body: { name, email, password })

Notes

- This is a minimal scaffold. For production, add input validation, password hashing, auth, and better error handling.
