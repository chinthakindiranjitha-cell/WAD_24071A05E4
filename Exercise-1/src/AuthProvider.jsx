import React, { createContext, useState, useEffect } from 'react'
export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('elearn_user')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  function login(username) {
    const u = { username, token: 'demo-token' }
    localStorage.setItem('elearn_user', JSON.stringify(u))
    setUser(u)
  }

  function logout() {
    localStorage.removeItem('elearn_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
