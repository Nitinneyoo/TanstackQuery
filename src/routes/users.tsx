import { createFileRoute } from "@tanstack/react-router";
import UserTable from "@/components/User/UserTable";

export const Route = createFileRoute("/users")({
  component: UserTable,
});
