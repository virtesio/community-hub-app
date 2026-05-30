'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function NewClubPage() {
  const [message, setMessage] = useState('')

  async function submit(formData: FormData) {
    setMessage('Saving...')
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setMessage('Please sign in first.'); return }

    const payload = {
      owner_id: user.id,
      name: formData.get('name'),
      category: formData.get('category'),
      description: formData.get('description'),
      city: formData.get('city'),
      region: formData.get('region'),
      website_url: formData.get('website_url')
    }

    const { error } = await supabase.from('clubs').insert(payload)
    setMessage(error ? error.message : 'Club created.')
  }

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 720 }}>
        <h1>New club</h1>
        <form action={submit}>
          <label>Name</label><input className="input" name="name" required />
          <label>Category</label>
          <select className="input" name="category" required>
            <option>Orchestra</option><option>Theatre</option><option>Choir</option><option>Sports Club</option><option>Dance</option><option>Volunteer Group</option><option>Other</option>
          </select>
          <label>Description</label><textarea className="input" name="description" rows={5} required />
          <label>City</label><input className="input" name="city" required />
          <label>Region / State</label><input className="input" name="region" required />
          <label>Website</label><input className="input" name="website_url" />
          <button type="submit">Create club</button>
        </form>
        <p className="muted">{message}</p>
      </div>
    </main>
  )
}
