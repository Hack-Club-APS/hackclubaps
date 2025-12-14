import fs from "fs";

export const prerender = false;
export const runtime = "nodejs";

export const GET = () => {
  let data;

  try {
    data = JSON.parse(fs.readFileSync("build-info.json", "utf-8"));
  } catch {
    data = {
      version: "dev",
      commit: "dev",
      buildTime: new Date().toISOString(),
    };
  }

  const vercel = {
    vercelBuildId: process.env.VERCEL_BUILD_ID || null,
    vercelCommitSha: process.env.VERCEL_GIT_COMMIT_SHA || null,
    vercelCommitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE || null,
    vercelBranch: process.env.VERCEL_GIT_COMMIT_REF || null
  };

  return new Response(
    JSON.stringify({ ...data, ...vercel }, null, 2),
    { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } }
  );
};
