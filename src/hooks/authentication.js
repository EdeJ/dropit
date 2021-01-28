import React, { useState, useContext, createContext, useEffect } from "react"
import { axiosConfig } from "../axios/axiosConfig"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   // Boolean(localStorage.getItem("user"))
  //   true
  // )

  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  // myUser.roles.includes('ROLE_ADMIN')

  useEffect(() => {
    console.log("wat is mijn user", user)
    if (user) {
      setIsAdmin(user.roles.includes('ROLE_ADMIN'))
    }

  }, [])


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
      newUser.roles = response.data.roles
      setIsAdmin(newUser.roles.includes('ROLE_ADMIN'))
      setUser(newUser)

      localStorage.setItem("user", JSON.stringify(newUser))
      // setIsAuthenticated(true)


      return true;

    } catch (error) {
      console.error(error);
      return false;
    }

  }

  const logout = async () => {
    // localStorage.removeItem("auth")
    localStorage.removeItem('user')
    // setIsAuthenticated(false)
    setUser(null)
    setIsAdmin(false)
  }

  return (
    <AuthContext.Provider
      value={{
        // isAuthenticated,
        isAdmin,
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
