'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function OpeningDetailPage({ params }: { params: { id: string } }) {
  const [opening, setOpening] = useState<any>(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('openings').select('*, clubs(name, city, region)').eq('id', params.id).single()
      setOpening(data)
    }
    load()
  }, [params.id])

  async function apply(formData: FormData) {
    setMessage('Submitting...')
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setMessage('Please sign in first.'); return }
    const { error } = await supabase.from('applications').insert({
      opening_id: params.id,
      user_id: user.id,
      applicant_name: formData.get('name'),
      applicant_email: formData.get('email'),
      message: formData.get('message')
    })
    setMessage(error ? error.message : 'Application submitted.')
  }

  if (!opening) return <main className="container"><p>Loading...</p></main>

  return (
    <main className="container">
      <div className="card">
        <span className="badge">{opening.opening_type}</span>
        <h1>{opening.title}</h1>
        <p><strong>{opening.clubs?.name}</strong> — {opening.clubs?.city}, {opening.clubs?.region}</p>
        <p className="muted">{opening.description}</p>
        {opening.deadline && <p><strong>Deadline:</strong> {opening.deadline}</p>}
      </div>
      <div className="card" style={{ marginTop: 18, maxWidth: 720 }}>
        <h2>Apply / register interest</h2>
        <form action={apply}>
          <label>Your name</label><input className="input" name="name" required />
          <label>Email</label><input className="input" type="email" name="email" required />
          <label>Message</label><textarea className="input" name="message" rows={5} />
          <button type="submit">Submit</button>
        </form>
        <p className="muted">{message}</p>
      </div>
    </main>
  )
}
