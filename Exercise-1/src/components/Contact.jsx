import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email || !message) return alert('Please fill all fields')
    // demo: no backend, just show a confirmation
    alert('Message sent. We will contact you soon.')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="card">
      <h2>Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Message
          <textarea value={message} onChange={e => setMessage(e.target.value)} />
        </label>
        <div className="form-actions">
          <button className="btn">Send</button>
        </div>
      </form>
    </section>
  )
}
