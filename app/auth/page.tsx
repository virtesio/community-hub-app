import GoogleSignInButton from '@/components/GoogleSignInButton'

export default function AuthPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6">
      <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">Try Me Out</h1>

        <p className="mt-3 text-gray-600">
          Sign in to follow clubs, apply for openings, and manage your organization.
        </p>

        <div className="mt-8">
          <GoogleSignInButton />
        </div>
      </div>
    </main>
  )
}