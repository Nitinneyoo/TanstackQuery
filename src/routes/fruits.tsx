import { createFileRoute } from "@tanstack/react-router";
import FruitsPage from "@/components/Fruit/FruitPage";

export const Route = createFileRoute("/fruits")({
  component: FruitsPage,
});
