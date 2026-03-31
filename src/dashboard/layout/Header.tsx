import { SidebarTrigger } from "@/components/ui/sidebar"

/**
 * DashboardHeader Component
 * 
 * Header bagian atas dashboard dengan:
 * - Sidebar trigger button
 * - User info / logout button (nanti bisa ditambah)
 */
export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>

      {/* User Info Area - bisa tambah logout button nanti */}
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-blue-500" />
      </div>
    </div>
  )
}
