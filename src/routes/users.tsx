import { createFileRoute } from "@tanstack/react-router";
import UserTable from "@/Pagination/UserTable";

export const Route = createFileRoute("/users")({
  component: UserTable,
});