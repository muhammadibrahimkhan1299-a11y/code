import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/robots/txt")({
  server: {
    handlers: {
      GET: async () => {
        const robots = [
          "User-agent: *",
          "Allow: /",
          "",
          "Sitemap: https://dailytools.spend.workers.dev/sitemap.xml",
        ].join("\n");

        return new Response(robots, {
          headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});