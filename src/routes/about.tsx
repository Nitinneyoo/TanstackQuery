import { createFileRoute } from "@tanstack/react-router";
import Aboutscreen from "@/AboutPage/Aboutscreen";

export const Route = createFileRoute("/about")({
  component: Aboutscreen,
});
