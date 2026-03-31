import { ReactNode } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import DashboardSidebar from "./Sidebar"
import DashboardHeader from "./Header"

/**
 * DashboardLayout Component
 * 
 * Layout utama untuk dashboard dengan struktur:
 * - Sidebar (kiri)
 * - Header (atas)
 * - Main content area (tengah)
 */

interface DashboardLayoutProps {
  children: ReactNode
  currentPage?: string
  onPageChange?: (page: string) => void
}

export default function DashboardLayout({
  children,
  currentPage = "overview",
  onPageChange,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <DashboardSidebar currentPage={currentPage} onPageChange={onPageChange} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <DashboardHeader />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50">
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
