import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

/**
 * Settings Page
 *
 * Halaman untuk user manage settings
 */
export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">
          Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Kelola pengaturan akun dan preferensi aplikasi Anda.
        </p>
      </div>

      {/* Settings Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Account Settings */}
        <section className="space-y-4 rounded-xl border border-slate-200 bg-white/90 p-6">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Account
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Perbarui informasi dasar akun Anda.
            </p>
          </div>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
          </div>
        </section>

        {/* Privacy Settings */}
        <section className="space-y-4 rounded-xl border border-slate-200 bg-white/90 p-6">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Privacy
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Kontrol bagaimana akun Anda muncul ke orang lain.
            </p>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                defaultChecked
              />
              Receive email notifications
            </label>
            <label className="flex items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
              />
              Show profile to public
            </label>
          </div>
        </section>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button size="sm">Save changes</Button>
      </div>
    </div>
  )
}
