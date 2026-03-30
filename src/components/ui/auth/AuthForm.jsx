// src/components/ui/auth/AuthForm.jsx
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthForm() {
  const [mode, setMode] = useState("signin") // "signin" | "signup"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")
    setLoading(true)

    try {
      let result

      if (mode === "signup") {
        result = await supabase.auth.signUp({ email, password })
        if (!result.error) {
          setMessage("Registrasi berhasil. Cek email kamu (jika perlu konfirmasi).")
        }
      } else {
        result = await supabase.auth.signInWithPassword({ email, password })
        if (!result.error) {
          setMessage("Login berhasil.")
        }
      }

      if (result.error) {
        setError(result.error.message)
      }
    } catch (err) {
      setError(err.message || "Terjadi kesalahan.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-sm mx-auto rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg text-white">
      <h2 className="text-lg font-semibold text-white mb-1">
        {mode === "signin" ? "Login ke akun Anda" : "Daftar akun baru"}
      </h2>
      <p className="text-xs text-gray-400 mb-4">
        Gunakan email dan password untuk mengakses dashboard budidaya lele.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email" className="text-xs text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-slate-950/60 border-white/10 text-sm"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password" className="text-xs text-gray-300">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Minimal 6 karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-slate-950/60 border-white/10 text-sm"
          />
        </div>

        {error && (
          <p className="text-xs text-red-400 bg-red-950/40 border border-red-800/40 rounded-md px-2 py-1">
            {error}
          </p>
        )}

        {message && !error && (
          <p className="text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-800/40 rounded-md px-2 py-1">
            {message}
          </p>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-linear-to-r from-emerald-500 via-emerald-400 to-cyan-400 text-slate-950 font-semibold"
        >
          {loading
            ? "Memproses..."
            : mode === "signin"
            ? "Login"
            : "Daftar"}
        </Button>
      </form>

      <div className="mt-4 text-xs text-gray-400 text-center">
        {mode === "signin" ? (
          <>
            Belum punya akun?{" "}
            <button
              type="button"
              className="text-emerald-300 hover:text-emerald-200 underline-offset-2 hover:underline"
              onClick={() => setMode("signup")}
            >
              Daftar
            </button>
          </>
        ) : (
          <>
            Sudah punya akun?{" "}
            <button
              type="button"
              className="text-emerald-300 hover:text-emerald-2 00 underline-offset-2 hover:underline"
              onClick={() => setMode("signin")}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  )
}