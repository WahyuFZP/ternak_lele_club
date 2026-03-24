    import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    } from "@/components/ui/navigation-menu"
    import { Button } from "@/components/ui/button"

    export default function Navbar() {
    return (
        <nav className="relative z-50 flex items-center justify-between px-6 py-4 w-full backdrop-blur-md bg-slate-950 ">

        {/* {Logo} */}
        <div className="flex items-center justify-between px-6">
            <span className="text-white font-bold text-lg tracking-wide">MyLogo</span>
        </div>

        {/* LEFT: Menu */}
        <NavigationMenu>
            <NavigationMenuList>

            {/* Home */}
            <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 font-medium text-white">
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
        <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl px-5 hover:opacity-90" >Login</Button>

        </nav>
    )
    }