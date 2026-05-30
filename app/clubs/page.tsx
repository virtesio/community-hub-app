import { supabase } from '@/lib/supabaseClient'

export const dynamic = 'force-dynamic'

export default async function ClubsPage() {
  const { data: clubs } = await supabase.from('clubs').select('*').order('created_at', { ascending: false })
  return (
    <main className="container">
      <h1>Clubs</h1>
      <div className="grid">
        {(clubs || []).map((club: any) => (
          <div className="card" key={club.id}>
            <span className="badge">{club.category}</span>
            <h3>{club.name}</h3>
            <p className="muted">{club.description}</p>
            <p>{club.city}, {club.region}</p>
          </div>
        ))}
        {(!clubs || clubs.length === 0) && <p className="muted">No clubs listed yet.</p>}
      </div>
    </main>
  )
}
