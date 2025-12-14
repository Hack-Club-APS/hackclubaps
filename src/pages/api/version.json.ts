import fs from "fs";
import path from "path";

export const GET = () => {
  let data;

  try {
    const filePath = path.join(
      process.cwd(),
      "src/data/build-info.json"
    );

    data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
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
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      }
    }
  );
};
