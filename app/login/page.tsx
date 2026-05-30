'use client'

import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  async function signIn(provider: 'google' | 'apple' | 'facebook') {
    const redirectTo = `${window.location.origin}/dashboard`
    const { error } = await supabase.auth.signInWithOAuth({ provider, options: { redirectTo } })
    if (error) alert(error.message)
  }

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 520, margin: '60px auto' }}>
        <h1>Sign in</h1>
        <p className="muted">Use Google, Apple or Facebook to create your account.</p>
        <div className="grid">
          <button onClick={() => signIn('google')}>Continue with Google</button>
          <button onClick={() => signIn('apple')}>Continue with Apple</button>
          <button onClick={() => signIn('facebook')}>Continue with Facebook</button>
        </div>
      </div>
    </main>
  )
}
