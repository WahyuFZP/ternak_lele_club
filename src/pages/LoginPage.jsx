import Navigation from "@/assets/Navigation"
import AuthForm from "@/components/ui/auth/AuthForm"

/**
 * LoginPage
 * 
 * Halaman login untuk user authentication
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <div className="flex items-center justify-center py-16">
        <AuthForm />
      </div>
    </div>
  )
}
