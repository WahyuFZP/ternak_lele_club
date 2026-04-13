import { Home, Users, Package, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import SidebarWorkspaceHeader from "./Sidebar/SidebarHeader/SidebarHeader"
import DashboardSidebarFooter from "./Sidebar/SidebarHeader/SidebarFooter"

/**
 * DashboardSidebar Component
 * 
 * Sidebar navigation untuk dashboard admin
 * Menu items dapat diklik untuk navigate antar pages
 */

interface MenuItem {
  title: string
  icon: any
  id: string
}

interface DashboardSidebarProps {
  currentPage?: string
  onPageChange?: (page: string) => void
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: Home,
    id: "overview",
  },
  {
    title: "Users",
    icon: Users,
    id: "users",
  },
  {
    title: "Products",
    icon: Package,
    id: "products",
  },
  {
    title: "Settings",
    icon: Settings,
    id: "settings",
  },
]

export default function DashboardSidebar({
  currentPage = "overview",
  onPageChange,
}: DashboardSidebarProps) {
  return (
    <Sidebar variant="inset" collapsible="icon" className="border-r">
      {/* Header (workspace selector / branding) */}
      <SidebarWorkspaceHeader />

      {/* Menu utama */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={currentPage === item.id}
                    onClick={() => onPageChange?.(item.id)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <DashboardSidebarFooter />
    </Sidebar>
  )
}
