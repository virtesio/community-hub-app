'use client'

import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const router = useRouter()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
    router.push('/')
  }

  return (
    <button
      type="button"
      onClick={signOut}
      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
    >
      Sign out
    </button>
  )
}
