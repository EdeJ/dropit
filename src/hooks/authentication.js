import React, { useState, useContext, createContext, useEffect } from "react"
import { axiosConfig } from "../axios/axiosConfig"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("user"))
  )

  const [user, setUser] = useState({
    username: '',
    password: '',
    accessToken: ''
  })

  useEffect(() => {
    if (isAuthenticated) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [])


  const login = async (username, password) => {

    console.log("AXIOS signIn POST");
    try {
      const response = await axiosConfig.post('api/auth/signin', {
        "username": username,
        "password": password
      });

      const newUser = {}
      newUser.username = response.data.username
      newUser.accessToken = 'Bearer ' + response.data.accessToken

      localStorage.setItem("user", JSON.stringify(user))

      setIsAuthenticated(true)
      setUser(newUser)

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
