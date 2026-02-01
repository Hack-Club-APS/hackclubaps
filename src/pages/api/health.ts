import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const healthData = {
    status: "UP",
    message: "System is operational",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };

  return new Response(JSON.stringify(healthData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
};