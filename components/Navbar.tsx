"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

const Navbar = () => {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold">Creative Showcase</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/" current={pathname === '/'}>Home</NavLink>
              <NavLink href="/creations" current={pathname === '/creations'}>Creations</NavLink>
              <NavLink href="/contact" current={pathname === '/contact'}>Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, current, children }: { href: string; current: boolean; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        current
          ? 'border-primary text-primary'
          : 'border-transparent text-muted-foreground hover:border-gray-300 hover:text-gray-700'
      }`}
    >
      {children}
    </Link>
  )
}

export default Navbar