import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider.jsx'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const nav = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!username || !password) return alert('Enter credentials')
    // direct login: accept any credentials and persist a minimal session
    login(username)
    nav('/')
  }

  return (
    <section className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <div className="form-actions">
          <button className="btn">Sign In</button>
        </div>
      </form>
    </section>
  )
}
