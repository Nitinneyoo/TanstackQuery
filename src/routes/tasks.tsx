import { createFileRoute } from "@tanstack/react-router";
import TaskTable from "@/Pagination/TaskTable";

export const Route = createFileRoute("/tasks")({
  component: TaskTable,
});