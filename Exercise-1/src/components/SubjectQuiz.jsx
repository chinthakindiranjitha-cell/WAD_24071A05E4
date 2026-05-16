import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const QUESTION_BANK = {
  'mathematics': [
    { q: 'What is 5 * 6?', options: ['11','30','56'], a: 1 },
    { q: 'Derivative of x^2 is?', options: ['2x','x','x^2'], a: 0 }
  ],
  'physics': [
    { q: 'Unit of force?', options: ['Joule','Newton','Watt'], a: 1 },
    { q: 'Speed of light approx?', options: ['3x10^8 m/s','1x10^6 m/s','3x10^6 m/s'], a: 0 }
  ],
  'chemistry': [
    { q: 'HCl is an example of?', options: ['Base','Acid','Salt'], a: 1 },
    { q: 'Atomic number of Oxygen?', options: ['8','16','2'], a: 0 }
  ],
  'biology': [
    { q: 'Photosynthesis occurs in?', options: ['Mitochondria','Chloroplast','Nucleus'], a: 1 },
    { q: 'Basic unit of life?', options: ['Cell','Tissue','Organ'], a: 0 }
  ],
  'computer-science': [
    { q: 'HTML stands for?', options: ['HyperText Markup Lang','Home Tool Markup Lang','Hyperlink Text Markup Lang'], a: 0 },
    { q: 'Which is a programming language?', options: ['CSS','HTML','JavaScript'], a: 2 }
  ]
}

export default function SubjectQuiz(){
  const { id } = useParams()
  const questions = QUESTION_BANK[id] || []
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))
  const nav = useNavigate()

  function select(i, val){
    const copy = [...answers]
    copy[i] = val
    setAnswers(copy)
  }

  function submit(){
    if (questions.length && answers.some(a=>a===null)) return alert('Please answer all questions')
    let score = 0
    answers.forEach((a,i)=>{ if (a === questions[i].a) score +=1 })
    const percent = questions.length ? Math.round((score / questions.length)*100) : 0
    const result = { subject: id, score, total: questions.length, percent, date: new Date().toISOString() }
    const raw = localStorage.getItem('elearn_results')
    const arr = raw ? JSON.parse(raw) : []
    arr.push(result)
    localStorage.setItem('elearn_results', JSON.stringify(arr))
    nav('/scorecard')
  }

  return (
    <section className="card">
      <h2>{id.replace('-', ' ').toUpperCase()} - Quiz</h2>
      {questions.length === 0 ? (
        <p>No quiz available for this subject.</p>
      ) : (
        <div className="quiz">
          {questions.map((q,i)=>(
            <div key={i} className="question">
              <div className="q-text">{i+1}. {q.q}</div>
              <div className="q-options">
                {q.options.map((opt,idx)=>(
                  <label key={idx}>
                    <input type="radio" name={`q${i}`} checked={answers[i]===idx} onChange={()=>select(i,idx)} /> {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="form-actions"><button className="btn" onClick={submit}>Submit</button></div>
        </div>
      )}
    </section>
  )
}
