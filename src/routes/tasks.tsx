import { createFileRoute } from "@tanstack/react-router";
import TaskTable from "@/components/Task/TaskTable";

export const Route = createFileRoute("/tasks")({
  component: TaskTable,
});