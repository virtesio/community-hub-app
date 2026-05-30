# Openings Hub Starter App

A responsive web app/PWA starter for local clubs, arts groups, orchestras, theatre groups, choirs and sports teams to list openings, auditions, tryouts and membership opportunities.

## Stack

- Next.js
- React
- Supabase Auth
- Supabase PostgreSQL
- Supabase Row Level Security
- Vercel-ready hosting

## Features included

- Public home page
- Sign in with Google, Apple and Facebook via Supabase OAuth
- Browse clubs
- Browse published openings
- Opening detail page
- Apply/register interest form
- Club dashboard landing page
- Create club form
- Create opening form
- Supabase SQL schema and security policies

## Setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. In Supabase Authentication > Providers, enable Google, Apple and Facebook.
4. Copy `.env.example` to `.env.local`.
5. Add your Supabase URL and anon key.
6. Install and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

This is an MVP starter, not a production-finished app. Next steps should include:

- Better server-side auth handling
- Email notifications
- Club approval workflow
- Applicant management screen
- Logo/image upload
- Search and filters
- Payment plans for clubs
- PWA install metadata
