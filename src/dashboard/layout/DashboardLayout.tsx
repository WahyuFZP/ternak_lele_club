import { ReactNode } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
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
    // SidebarProvider membungkus seluruh dashboard dan mengatur state sidebar
    // className="text-left" untuk menimpa text-align center global dari landing page
    <SidebarProvider className="text-left">
      {/* Sidebar kiri (fixed) */}
      <DashboardSidebar
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      {/* Area konten utama mengikuti pola SidebarInset shadcn */}
      {/* bg-slate-50 memberi kontras lembut antara background dan card putih */}
      <SidebarInset className="flex flex-col bg-slate-50">
        {/* Header di atas konten */}
        <DashboardHeader />

        {/* Konten halaman */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 p-4 md:p-6">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
