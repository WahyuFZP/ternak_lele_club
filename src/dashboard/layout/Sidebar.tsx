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
    <Sidebar className="border-r">
      <SidebarContent>
        {/* Logo / Branding */}
        <div className="mb-6 px-4 py-4">
          <h2 className="text-xl font-bold text-blue-600">Admin</h2>
        </div>

        {/* Navigation Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onPageChange?.(item.id)}
                    className={`cursor-pointer ${
                      currentPage === item.id
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
