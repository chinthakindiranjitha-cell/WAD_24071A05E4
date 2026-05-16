import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './AuthProvider.jsx'
import Nav from './components/Nav.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Subjects from './components/Subjects.jsx'
import SubjectQuiz from './components/SubjectQuiz.jsx'
import ScoreCard from './components/ScoreCard.jsx'
import Contact from './components/Contact.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-root">
          <Nav />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/subjects"
                element={<ProtectedRoute><Subjects /></ProtectedRoute>}
              />
              <Route
                path="/subjects/:id"
                element={<ProtectedRoute><SubjectQuiz /></ProtectedRoute>}
              />
              <Route
                path="/scorecard"
                element={<ProtectedRoute><ScoreCard /></ProtectedRoute>}
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer className="copyright" style={{ paddingBottom: '24px' }}>
            © 24071A05E4 All Rights Reserved
          </footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
