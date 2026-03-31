import { supabase } from "@/lib/supabaseClient"
import { createContext, useContext, useEffect, useState } from "react"

/**
 * AuthContext untuk manage authentication state
 * Stores: user data, isLoggedIn status, loading state
 */
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  // Simulasi: Check apakah user sudah login (dari Supabase nanti)
  const checkAuth = async () => {
    try {
      setLoading(true)
        const { data } = await supabase.auth.getSession()
        if(data.session?.user) {
          setUser(data.session.user)
          setIsLoggedIn(true)
        } else {
          setUser(null)
          setIsLoggedIn(false)
        }
    } catch (err) {
      console.error("Error checking auth:", err)
      setUser(null)
      setIsLoggedIn(false)
    } 
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])


  // Login function
  const login = (userData) => {
    setUser(userData)
    setIsLoggedIn(true)
    // TODO: Save ke localStorage atau sessionStorage
  }

  // Logout function
  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    // TODO: Clear localStorage/sessionStorage
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook untuk use AuthContext
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}

