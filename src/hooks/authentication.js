import React, { useState, useContext, createContext } from "react"
import users from '../data/users.json'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("auth"))
  )

  const login = (username, passphrase) => {
    const user = users.find(({ name, password }) => name === username && password === passphrase)

    if (user) {
      localStorage.setItem("auth", "1")
      setIsAuthenticated(true)
    } else {
      alert('Error bij inloggen')
      setIsAuthenticated(false)
    }

  }

  const logout = async () => {
    localStorage.removeItem("auth")
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthContext)
