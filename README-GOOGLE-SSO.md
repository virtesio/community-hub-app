# Try Me Out — Google SSO setup

This patch changes the MVP to Google-only login through Supabase.

## Supabase setup

1. Go to Supabase → Authentication → Providers → Google.
2. Enable Google.
3. Copy the Supabase callback URL shown there. It will look like:

```text
https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback
```

4. In Google Cloud Console, create an OAuth Client ID:
   - Application type: Web application
   - Authorized JavaScript origins:
     - http://localhost:3000
     - https://your-live-domain.com
   - Authorized redirect URI:
     - https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback

5. Copy the Google Client ID and Client Secret back into Supabase.

## Supabase URL Configuration

Go to Supabase → Authentication → URL Configuration.

Site URL while developing:

```text
http://localhost:3000
```

Redirect URLs:

```text
http://localhost:3000/auth/callback
https://your-live-domain.com/auth/callback
```

## Environment variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLISHABLE_OR_ANON_KEY
```

Restart Next.js after changing `.env.local`:

```bash
npm run dev
```

## Files in this patch

Copy these files into your app:

```text
app/auth/page.tsx
app/auth/callback/route.ts
app/dashboard/page.tsx
components/GoogleSignInButton.tsx
components/SignOutButton.tsx
lib/supabaseClient.ts
lib/supabaseServer.ts
middleware.ts
```

Then remove any Apple/Facebook buttons from existing pages.
