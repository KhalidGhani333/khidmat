import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guides")({
  component: () => <div />, // Will be overridden by lazy component
});
