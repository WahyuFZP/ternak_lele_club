import { LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

// Footer sidebar: menampilkan info user singkat + tombol logout
export default function DashboardSidebarFooter() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <SidebarFooter className="border-t border-sidebar-border">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="default"
            className="h-auto items-center justify-between gap-2 py-2"
            onClick={handleLogout}
          >
            <div className="flex min-w-0 items-center gap-2">
              <div className="h-8 w-8 shrink-0 rounded-full bg-violet-500" />
              <div className="flex min-w-0 flex-col text-left">
                <span className="max-w-40 truncate text-sm font-medium">
                  {user?.email || "Logged in"}
                </span>
                <span className="text-xs text-muted-foreground">Logout</span>
              </div>
            </div>
            <LogOut className="h-4 w-4 text-slate-500" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}