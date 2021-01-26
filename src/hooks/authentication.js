import React, { useState, useContext, createContext, useEffect } from "react"
import { axiosConfig } from "../axios/axiosConfig"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("user"))
  )

  const [user, setUser] = useState()

  useEffect(() => {
    if (isAuthenticated) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [isAuthenticated])


  const login = async (username, password) => {

    try {
      const response = await axiosConfig.post('api/auth/signin', {
        "username": username,
        "password": password
      });

      const newUser = {}
      newUser.userId = response.data.id
      newUser.username = response.data.username
      newUser.accessToken = 'Bearer ' + response.data.accessToken

      localStorage.setItem("user", JSON.stringify(newUser))
      setIsAuthenticated(true)
      // setUser(newUser)

      return true;

    } catch (error) {
      console.error(error);
      return false;
    }








    // if (user) {
    //   // localStorage.setItem("auth", "1")
    //   localStorage.setItem("user", JSON.stringify(user))
    //   setIsAuthenticated(true)
    //   setUser(user)
    //   // console.log('User = ', user)
    // } else {
    //   alert('Error bij inloggen')
    //   setIsAuthenticated(false)
    // }

  }

  const logout = async () => {
    // localStorage.removeItem("auth")
    localStorage.removeItem('user')
    setIsAuthenticated(false)
    // setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthContext)
