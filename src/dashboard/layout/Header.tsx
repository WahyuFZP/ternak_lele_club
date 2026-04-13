import { SidebarTrigger } from "@/components/ui/sidebar"
import { NavigationMenu } from "@/components/ui/navigation-menu"

/**
 * DashboardHeader Component
 * 
 * Header bagian atas dashboard dengan:
 * - Sidebar trigger button
 * - User info / logout button (nanti bisa ditambah)
 */
export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-3 backdrop-blur">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-lg font-semibold text-slate-900">Admin Dashboard</h1>
      </div>

      {/* User Info Area - bisa tambah logout button nanti */}
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-indigo-500" />
      </div>
    </div>
  )
}
