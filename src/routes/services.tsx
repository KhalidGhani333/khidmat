import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Marble, Tile & Granite Polishing | Khidmat" },
      { name: "description", content: "Professional marble polishing, tile deep cleaning and granite restoration services in Riyadh. Italian equipment, expert technicians." },
      { property: "og:title", content: "Services - Marble, Tile & Granite Polishing | Khidmat" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});
