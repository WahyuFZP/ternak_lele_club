import { Routes, Route } from "react-router-dom"
import Navigation from "./assets/Navigation"
import Header from "./assets/Header"
import StartSection from "./assets/StartSection"
import Footer from "./assets/Footer"
import Testimonials from "./assets/Testimonials"
import AuthForm from "@/components/ui/auth/AuthForm"

function App() {
  return (
    <Routes>
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

      <Route
        path="/auth"
        element={
          <div className="min-h-screen bg-slate-950">
            <Navigation />
            <div className="flex items-center justify-center py-16">
              <AuthForm />
            </div>
          </div>
        }
        
      />
    </Routes>
  )
}

export default App
