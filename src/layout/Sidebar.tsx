import { Link } from "@tanstack/react-router";
import {
  FileText,
  LayoutDashboard,
  ListTodo,
  PanelLeft,
} from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Todos",
    icon: ListTodo,
    href: "/todos",
  },
  {
    title: "About",
    icon: FileText,
    href: "/about",
  },
  {
    title: "Paginated Queries",
    icon: FileText,
    href: "/paginatedqueries",
  },
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-background sticky top-0 transition-width duration-300",
        collapsed ? "w-16" : "w-64",
        className,
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        {/* --- MODIFICATION START --- */}
        <Link
          to="/"
          className={cn(
            "flex w-full cursor-pointer items-center gap-2 font-semibold",
            collapsed && "justify-center",
          )}
          // Add onClick handler to toggle the sidebar state
          onClick={(e) => {
            e.preventDefault(); // This prevents the link from navigating
            setCollapsed(!collapsed);
          }}
        >
          <PanelLeft className="h-6 w-6" />
          {!collapsed && <span>Admin</span>}
        </Link>
        {/* The separate Button component has been removed */}
        {/* --- MODIFICATION END --- */}
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid items-start gap-2 p-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              activeProps={{
                className: "bg-muted text-primary font-medium",
              }}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}