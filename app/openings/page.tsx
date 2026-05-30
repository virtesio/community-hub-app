import { supabase } from '@/lib/supabaseClient'

export const dynamic = 'force-dynamic'

export default async function OpeningsPage() {
  const { data: openings } = await supabase
    .from('openings')
    .select('*, clubs(name, city, region)')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  return (
    <main className="container">
      <h1>Openings</h1>
      <div className="grid">
        {(openings || []).map((opening: any) => (
          <div className="card" key={opening.id}>
            <span className="badge">{opening.opening_type}</span>
            <h3>{opening.title}</h3>
            <p className="muted">{opening.description}</p>
            <p><strong>{opening.clubs?.name}</strong></p>
            <p>{opening.clubs?.city}, {opening.clubs?.region}</p>
            <a className="button" href={`/openings/${opening.id}`}>View / Apply</a>
          </div>
        ))}
        {(!openings || openings.length === 0) && <p className="muted">No openings listed yet.</p>}
      </div>
    </main>
  )
}
