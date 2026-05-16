import React, { useEffect, useState } from 'react'

export default function ScoreCard() {
  const [resultsBySubject, setResultsBySubject] = useState({})

  useEffect(() => {
    const raw = localStorage.getItem('elearn_results')
    if (!raw) return
    try {
      const arr = JSON.parse(raw)
      // build latest result per subject
      const map = {}
      arr.forEach(r => {
        if (!map[r.subject]) map[r.subject] = r
        else if (new Date(r.date) > new Date(map[r.subject].date)) map[r.subject] = r
      })
      setResultsBySubject(map)
    } catch (e) {
      console.error('Failed to parse results', e)
    }
  }, [])

  const subjects = Object.keys(resultsBySubject)

  if (subjects.length === 0) return (
    <section className="card">
      <h2>Score Card</h2>
      <p>No results yet. Take a subject quiz from the Subjects page.</p>
    </section>
  )

  return (
    <section className="card">
      <h2>Score Card</h2>
      <div className="score">
        {subjects.map(sub => {
          const r = resultsBySubject[sub]
          return (
            <div key={sub} className="score-row">
              <div><strong>Subject:</strong> {sub.replace('-', ' ')}</div>
              <div><strong>Score:</strong> {r.score} / {r.total}</div>
              <div><strong>Percent:</strong> {r.percent}%</div>
              <div><strong>Date:</strong> {new Date(r.date).toLocaleString()}</div>
              <hr/>
            </div>
          )
        })}
      </div>
    </section>
  )
}
