import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider.jsx'

export default function Home() {
  const { user, logout } = useContext(AuthContext)
  const nav = useNavigate()

  return (
    <section className="home-hero">
      <div className="hero-content">
        <div className="hero-badge">✨ Premium Learning Platform</div>
        <h1 className="hero-title">Master Your Subjects with <span className="highlight">LearnSphere</span></h1>
        <p className="hero-subtitle">
          Interactive mock tests, comprehensive score tracking, and an intuitive learning experience designed to help you excel.
        </p>
        {!user ? (
          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" to="/login">Get Started Now</Link>
            <Link className="btn btn-outline btn-lg" to="/contact">Contact Us</Link>
          </div>
        ) : (
          <div className="hero-user">
            <p className="lead">Welcome back, <strong>{user.username}</strong>!</p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" to="/subjects">Explore Subjects</Link>
              <Link className="btn btn-outline btn-lg" to="/scorecard">View Scorecard</Link>
            </div>
          </div>
        )}
      </div>
      <div className="hero-image">
        <div className="floating-card card-1">📝 Mock Tests</div>
        <div className="floating-card card-2">📈 Progress Tracking</div>
        <div className="floating-card card-3">💡 Smart Analytics</div>
      </div>
    </section>
  )
}
