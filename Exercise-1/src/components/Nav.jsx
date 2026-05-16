import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider.jsx'

export default function Nav() {
  const { user, logout } = useContext(AuthContext)
  const nav = useNavigate()

  function handleLogout() {
    logout()
    nav('/login')
  }

  return (
    <header className="nav navbar-shadow">
      <div className="brand">LearnSphere</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        {user && (
          <>
            <Link to="/subjects">Subjects</Link>
            <Link to="/scorecard">Score Card</Link>
          </>
        )}
        <Link to="/contact">Contact</Link>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <button className="btn-link" onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </header>
  )
}
