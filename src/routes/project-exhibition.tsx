import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/project-exhibition")({
  component: () => <div>Project Exhibition</div>,
});
