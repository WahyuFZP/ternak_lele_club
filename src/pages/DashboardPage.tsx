import DashboardLayout from "@/dashboard/layout/DashboardLayout"
import OverviewPage from "@/dashboard/pages/Overview"
import UsersPage from "@/dashboard/pages/Users"
import ProductsPage from "@/dashboard/pages/Products"
import SettingsPage from "@/dashboard/pages/Settings"
import { useState } from "react"

/**
 * DashboardPage
 * 
 * Main dashboard wrapper yang handle page routing
 * Import halaman-halaman dashboard di sini
 */
export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState("overview")

  // Function untuk render page sesuai currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <OverviewPage />
      case "users":
        return <UsersPage />
      case "products":
        return <ProductsPage />
      case "settings":
        return <SettingsPage />
      default:
        return <OverviewPage />
    }
  }

  return (
    <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  )
}
