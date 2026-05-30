import Link from 'next/link'

export default function DashboardPage() {
  return (
    <main className="container">
      <h1>Club dashboard</h1>
      <p className="muted">Create a club and post openings for auditions, tryouts, vacancies, volunteers or general membership.</p>
      <div className="grid">
        <div className="card">
          <h3>Create club</h3>
          <p className="muted">Add your organization profile and location.</p>
          <Link className="button" href="/dashboard/clubs/new">New club</Link>
        </div>
        <div className="card">
          <h3>Post opening</h3>
          <p className="muted">Publish an audition, tryout, vacancy or volunteer role.</p>
          <Link className="button" href="/dashboard/openings/new">New opening</Link>
        </div>
      </div>
    </main>
  )
}
