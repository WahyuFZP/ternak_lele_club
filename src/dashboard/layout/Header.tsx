import { SidebarTrigger } from "@/components/ui/sidebar"

/**
 * DashboardHeader Component
 * 
 * Header bagian atas dashboard dengan:
 * - Sidebar trigger button (mobile)
 * - Info judul + nama halaman aktif
 * - Placeholder avatar user
 */
interface DashboardHeaderProps {
  currentPage?: string
}

export default function DashboardHeader({
  currentPage = "overview",
}: DashboardHeaderProps) {
  const pageTitles: Record<string, string> = {
    overview: "Overview",
    users: "Users",
    products: "Products",
    settings: "Settings",
  }

  const pageTitle = pageTitles[currentPage] ?? "Overview"

  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-3 backdrop-blur">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Admin dashboard
          </span>
          <span className="text-sm font-semibold text-slate-900">
            {pageTitle}
          </span>
        </div>
      </div>

      {/* User Info Area - bisa tambah logout button nanti */}
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-violet-500" />
      </div>
    </div>
  )
}
