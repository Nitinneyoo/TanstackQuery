import { createFileRoute } from "@tanstack/react-router";
import PaginatedQueriesScreen from "@/Pagination/PaginatedQuery";

export const Route = createFileRoute("/paginatedqueries")({
  component: PaginatedQueriesScreen,
});
