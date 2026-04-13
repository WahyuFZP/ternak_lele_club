import { Home, Users, Package, TrendingUp } from "lucide-react"
import StatsCard from "@/dashboard/components/StatsCard"

/**
 * Overview Page
 * 
 * Dashboard home - menampilkan stats dan summary
 */
export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">Dashboard overview</h1>
        <p className="mt-1 text-sm text-slate-500">Ringkasan singkat performa aplikasi Anda hari ini.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value="1,234"
          icon={<Users className="h-6 w-6" />}
          color="indigo"
        />
        <StatsCard
          title="Total Products"
          value="567"
          icon={<Package className="h-6 w-6" />}
          color="green"
        />
        <StatsCard
          title="Revenue"
          value="$45,231"
          icon={<TrendingUp className="h-6 w-6" />}
          color="indigo"
        />
        <StatsCard
          title="Orders"
          value="892"
          icon={<Home className="h-6 w-6" />}
          color="red"
        />
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border bg-white p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
              <p className="text-sm font-medium text-gray-900">New user registered</p>
              <p className="text-xs text-gray-600">2 hours ago</p>
            </div>
            <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
              New
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
              <p className="text-sm font-medium text-gray-900">Order #1202 completed</p>
              <p className="text-xs text-gray-600">4 hours ago</p>
            </div>
            <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
              Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
