import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from "@tanstack/react-router"
import { LayoutDashboard, Menu, X, FileText } from "lucide-react"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "About",
    icon: FileText,
    href: "/about",
  },
]

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div
      className={cn(
        " flex h-screen flex-col border-r bg-background sticky top-0 transition-width duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 font-semibold",
            collapsed && "justify-center"
          )}
        >
          {!collapsed && <span>TanStack Query</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <Menu className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{
                className: "bg-accent text-accent-foreground font-medium"
              }}
            >
              <item.icon className="h-6 w-6" />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}
