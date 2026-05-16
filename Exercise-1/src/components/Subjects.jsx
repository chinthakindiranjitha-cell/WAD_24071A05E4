import React from 'react'
import { Link } from 'react-router-dom'

const subjects = [
  { id: 'mathematics', name: 'Mathematics' },
  { id: 'physics', name: 'Physics' },
  { id: 'chemistry', name: 'Chemistry' },
  { id: 'biology', name: 'Biology' },
  { id: 'computer-science', name: 'Computer Science' }
]

export default function Subjects() {
  return (
    <section className="card">
      <h2>Subjects</h2>
      <div className="subject-grid">
        {subjects.map(s => (
          <Link key={s.id} to={`/subjects/${s.id}`} className="subject-tile">
            <div className="subject-name">{s.name}</div>
            <div className="subject-desc">Practice mock tests to improve your score in {s.name}.</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
