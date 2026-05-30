import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabaseServer'
import SignOutButton from '@/components/SignOutButton'

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth')
  }

  const displayName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email ||
    'there'

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {displayName}</h1>
          <p className="mt-2 text-gray-600">
            Manage clubs, openings, auditions, tryouts, and applications.
          </p>
        </div>
        <SignOutButton />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link
          href="/clubs/new"
          className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:bg-gray-50"
        >
          <h2 className="font-semibold">Create a club</h2>
          <p className="mt-2 text-sm text-gray-600">
            Add an orchestra, theatre group, sports club, choir, or community group.
          </p>
        </Link>

        <Link
          href="/openings/new"
          className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:bg-gray-50"
        >
          <h2 className="font-semibold">List an opening</h2>
          <p className="mt-2 text-sm text-gray-600">
            Post an audition, tryout, vacancy, volunteer role, or membership opening.
          </p>
        </Link>

        <Link
          href="/openings"
          className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:bg-gray-50"
        >
          <h2 className="font-semibold">Browse openings</h2>
          <p className="mt-2 text-sm text-gray-600">
            See what local clubs and groups are looking for.
          </p>
        </Link>
      </div>
    </main>
  )
}
