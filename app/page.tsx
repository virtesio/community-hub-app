import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <span className="badge">Arts • Sports • Theatre • Music • Community</span>
        <h1>Find your next group, role, audition or tryout.</h1>
        <p>
          A local discovery platform where clubs, orchestras, choirs, theatre groups and teams can post openings — and people can follow, apply and get notified.
        </p>
        <div className="row">
          <Link href="/openings" className="button">Browse openings</Link>
          <Link href="/dashboard" className="button secondary">List your club</Link>
        </div>
      </section>
      <section className="grid">
        <div className="card"><h3>For members</h3><p className="muted">Follow local groups and apply when they post auditions, tryouts, vacancies or volunteer roles.</p></div>
        <div className="card"><h3>For clubs</h3><p className="muted">Create a profile, publish openings and manage applicants from a simple dashboard.</p></div>
        <div className="card"><h3>For communities</h3><p className="muted">Make local arts, sports and volunteer opportunities easier to discover.</p></div>
      </section>
    </main>
  )
}
