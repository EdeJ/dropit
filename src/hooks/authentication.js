import React, { useState, useContext, createContext } from "react"
import { axiosConfig } from "../axios/axiosConfig"
import { roles } from "../helpers/roles"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  function isAdmin() {
    if (user) {
      return user.roles.includes(roles.ADMIN)
    }
  }

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

      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))

      return true;

    } catch (error) {
      console.error(error);
      return false;
    }

  }

  const logout = async () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
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
