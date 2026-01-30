import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const startTime = Date.now();
  const uptimeSeconds = process.uptime?.() ?? null;
  let externalApiStatus: "ok" | "fail" = "ok";

  try {
    const res = await fetch("https://hackclubaps.vercel.app", { method: "HEAD" });
    if (!res.ok) externalApiStatus = "fail";
  } catch {
    externalApiStatus = "fail";
  }

  const data = {  
    status: "ok",
    timestamp: new Date().toISOString(),
    uptimeSeconds,
    checks: {
      server: "ok",
      externalApi: externalApiStatus,
    },
    responseTimeMs: Date.now() - startTime,
  };

  const httpStatus = externalApiStatus === "ok" ? 200 : 503;

  return new Response(JSON.stringify(data, null, 2), {
    status: httpStatus,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};
