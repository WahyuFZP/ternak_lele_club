import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

// Header kecil di bagian atas sidebar (workspace selector)
export default function SidebarWorkspaceHeader() {
  return (
    <SidebarHeader>
         {/* Logo / branding di atas */}
      <div className="mb-2 flex items-center gap-2 px-2">
        {/* Bisa pakai img, icon, atau div warna */}
        <img
          src={"src/assets/lele.png"}
          alt="Landing Auth"
          className="h-7 w-7 rounded-md"
        />
        <span className="text-sm font-semibold tracking-tight text-slate-900">
          Dashboard Lele Club
        </span>
      </div>
      <SidebarMenu>
        
      </SidebarMenu>
    </SidebarHeader>
  )
}