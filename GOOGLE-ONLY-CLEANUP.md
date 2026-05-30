# Remove Apple and Facebook login from Try Me Out

Search your project for these words:

```text
apple
facebook
provider: 'apple'
provider: 'facebook'
```

Delete any login buttons or provider calls for Apple/Facebook.

The only OAuth call for the MVP should be:

```ts
supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${window.location.origin}/auth/callback`
  }
})
```

Recommended navigation:

- Signed out users see `/auth`
- Signed in users go to `/dashboard`
- Club creation and opening creation pages should redirect to `/auth` if not signed in
