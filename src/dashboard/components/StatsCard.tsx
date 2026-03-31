/**
 * StatsCard Component
 * 
 * Reusable card untuk menampilkan statistics/metrics
 */

interface StatsCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  color?: "blue" | "green" | "red" | "purple"
}

const colorStyles = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  red: "bg-red-50 text-red-600",
  purple: "bg-purple-50 text-purple-600",
}

const iconColorStyles = {
  blue: "text-blue-600",
  green: "text-green-600",
  red: "text-red-600",
  purple: "text-purple-600",
}

export default function StatsCard({
  title,
  value,
  icon,
  color = "blue",
}: StatsCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        {icon && (
          <div className={`rounded-lg ${colorStyles[color]} p-3`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
