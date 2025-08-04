import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/layout/Sidebar";

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  ),
});
