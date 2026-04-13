/**
 * StatsCard Component
 * 
 * Reusable card untuk menampilkan statistics/metrics
 */

interface StatsCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  color?: "accent" | "green" | "red"
}

const colorStyles = {
  accent: "bg-violet-50 text-violet-600",
  green: "bg-emerald-50 text-emerald-600",
  red: "bg-rose-50 text-rose-600",
}

export default function StatsCard({
  title,
  value,
  icon,
  color = "accent",
}: StatsCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        {icon && (
          <div className={`rounded-lg ${colorStyles[color]} p-2.5`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
