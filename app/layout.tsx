import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Openings Hub',
  description: 'Discover local clubs, arts groups, teams, auditions, tryouts and opportunities.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/" className="brand">Openings Hub</Link>
          <div className="navlinks">
            <Link href="/clubs">Clubs</Link>
            <Link href="/openings">Openings</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login" className="button">Sign in</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
