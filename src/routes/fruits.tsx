import { createFileRoute } from "@tanstack/react-router";
import FruitsPage from "@/Pagination/FruitPage";

export const Route = createFileRoute("/fruits")({
  component: FruitsPage,
});