import fs from "fs";

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

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};
