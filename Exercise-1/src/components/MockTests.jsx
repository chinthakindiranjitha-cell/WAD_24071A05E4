import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const QUESTIONS = [
  {
    q: 'What is 2 + 2?',
    options: ['3', '4', '5'],
    a: 1
  },
  {
    q: 'Which is a programming language?',
    options: ['HTML', 'CSS', 'JavaScript'],
    a: 2
  },
  {
    q: 'H2O is chemical formula for?',
    options: ['Oxygen', 'Water', 'Hydrogen'],
    a: 1
  }
]

export default function MockTests() {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null))
  const nav = useNavigate()

  function select(i, val) {
    const copy = [...answers]
    copy[i] = val
    setAnswers(copy)
  }

  function submit() {
    if (answers.some(a => a === null)) return alert('Please answer all questions')
    let score = 0
    answers.forEach((a, i) => { if (a === QUESTIONS[i].a) score += 1 })
    const percent = Math.round((score / QUESTIONS.length) * 100)
    const result = { subject: 'general', score, total: QUESTIONS.length, percent, date: new Date().toISOString() }
    const raw = localStorage.getItem('elearn_results')
    const arr = raw ? JSON.parse(raw) : []
    arr.push(result)
    localStorage.setItem('elearn_results', JSON.stringify(arr))
    nav('/scorecard')
  }

  return (
    <section className="card">
      <h2>Mock Test</h2>
      <div className="quiz">
        {QUESTIONS.map((q, i) => (
          <div key={i} className="question">
            <div className="q-text">{i + 1}. {q.q}</div>
            <div className="q-options">
              {q.options.map((opt, idx) => (
                <label key={idx}>
                  <input type="radio" name={`q${i}`} checked={answers[i] === idx} onChange={() => select(i, idx)} /> {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="form-actions">
        <button className="btn" onClick={submit}>Submit Test</button>
      </div>
    </section>
  )
}
