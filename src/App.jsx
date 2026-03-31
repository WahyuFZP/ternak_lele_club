import { Routes, Route, Navigate } from "react-router-dom"
import Navigation from "./assets/Navigation"
import Header from "./assets/Header"
import StartSection from "./assets/StartSection"
import Footer from "./assets/Footer"
import Testimonials from "./assets/Testimonials"
import { AuthProvider, useAuth } from "@/context/AuthContext"
import LoginPage from "@/pages/LoginPage"
import DashboardPage from "@/pages/DashboardPage"

/**
 * ProtectedRoute Component
 * 
 * Protect dashboard route - hanya bisa diakses jika user sudah login
 * Jika belum login, redirect ke /auth
 */
function ProtectedRoute({ children }) {
  const { isLoggedIn, loading } = useAuth()

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />
  }

  return children
}

/**
 * MainApp Component
 * 
 * Routes utama aplikasi
 */
function MainApp() {
  return (
    <Routes>
      {/* Home / Landing Page */}
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <Header />
            <StartSection />
            <Testimonials />
            <Footer />
          </>
        }
      />

      {/* Login Page */}
      <Route
        path="/auth"
        element={<LoginPage />}
      />

      {/* Dashboard - Protected Route */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* 404 - Redirect ke home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

/**
 * App Component
 * 
 * Root component - wrap dengan AuthProvider untuk context yang global
 */


export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  )
}
