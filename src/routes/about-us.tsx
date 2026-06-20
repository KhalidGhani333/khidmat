import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-us")({
  component: () => <div>About Us</div>,
});
