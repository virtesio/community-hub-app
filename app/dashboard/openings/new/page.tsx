'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function NewOpeningPage() {
  const [clubs, setClubs] = useState<any[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('clubs').select('*').eq('owner_id', user.id).order('name')
      setClubs(data || [])
    }
    load()
  }, [])

  async function submit(formData: FormData) {
    setMessage('Saving...')
    const payload = {
      club_id: formData.get('club_id'),
      title: formData.get('title'),
      opening_type: formData.get('opening_type'),
      description: formData.get('description'),
      deadline: formData.get('deadline') || null,
      status: 'published'
    }
    const { error } = await supabase.from('openings').insert(payload)
    setMessage(error ? error.message : 'Opening published.')
  }

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 720 }}>
        <h1>New opening</h1>
        <form action={submit}>
          <label>Club</label>
          <select className="input" name="club_id" required>
            <option value="">Select club</option>
            {clubs.map(club => <option key={club.id} value={club.id}>{club.name}</option>)}
          </select>
          <label>Title</label><input className="input" name="title" required />
          <label>Opening type</label>
          <select className="input" name="opening_type" required>
            <option>Audition</option><option>Tryout</option><option>Vacancy</option><option>Volunteer Role</option><option>Board Position</option><option>General Membership</option>
          </select>
          <label>Description</label><textarea className="input" name="description" rows={6} required />
          <label>Deadline</label><input className="input" type="date" name="deadline" />
          <button type="submit">Publish opening</button>
        </form>
        <p className="muted">{message}</p>
      </div>
    </main>
  )
}
