    import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    } from "@/components/ui/navigation-menu"
    import { Button } from "@/components/ui/button"
    import { useNavigate } from "react-router-dom"

    export default function Navbar() {
        const navigate = useNavigate()

        const handleHomeClick = () => {
            navigate("/")
        }

        const handleLoginClick = () => {
    navigate("/auth")
  }

    return (
        <nav className="relative z-50 flex items-center justify-between px-6 py-1 w-full bg-slate-950 border-b border-white/10">

        {/* {Logo} */}
        <div className="flex items-center justify-between px-6">
            <img src="src/assets/lele.png" alt="logo" className="w-25 h-15"/>
        </div>

        {/* LEFT: Menu */}
        <NavigationMenu>
            <NavigationMenuList>

            {/* Home */}
            <NavigationMenuItem>
                <NavigationMenuLink 
                className="px-3 py-2 font-medium text-white"
                onClick={handleHomeClick}
                >
                Home
                </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About (dropdown) */}
            <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="p-4 w-48 space-y-2">
                    <li>
                    <NavigationMenuLink>About Me</NavigationMenuLink>
                    </li>
                    <li>
                    <NavigationMenuLink>My Skills</NavigationMenuLink>
                    </li>
                </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 font-medium text-white">
                Contact
                </NavigationMenuLink>
            </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

                {/* RIGHT: Login */}
                <Button 
                type="button"
                className="bg-linear-to-r from-emerald-500 to-cyan-400 text-slate-950 font-medium rounded-xl px-5 py-2 hover:brightness-110" 
                onClick={handleLoginClick}
                >
                    Login
                </Button>

        </nav>
    )
    }