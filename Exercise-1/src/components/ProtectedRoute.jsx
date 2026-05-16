import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider.jsx'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext)
  if (!user) return <Navigate to="/login" replace />
  return children
}
