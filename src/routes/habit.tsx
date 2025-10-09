import { createFileRoute } from "@tanstack/react-router";
import HabitTutorial from "@/components/Habit/HabitTutorial";

export const Route = createFileRoute("/habit")({
  component: HabitTutorial,
});
