'use client'

import { supabase } from '@/lib/supabaseClient'

export default function GoogleSignInButton() {
  const signInWithGoogle = async () => {
    const origin = window.location.origin

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      console.error('Google sign-in error:', error.message)
      alert(error.message)
    }
  }

  return (
    <button
      type="button"
      onClick={signInWithGoogle}
      className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
    >
      Continue with Google
    </button>
  )
}
