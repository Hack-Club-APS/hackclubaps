import fs from "node:fs";
import { execSync } from "node:child_process";

export interface BuildInfo {
  version: string;
  commit: string;
  buildTime: string;
}

function getCommit(): string {
  if (process.env.GIT_COMMIT) {
    return process.env.GIT_COMMIT;
  }

  try {
    return execSync("git rev-parse --short HEAD", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    return "unknown";
  }
}

function getVersion(): string {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8")) as {
    version?: string;
  };

  return pkg.version ?? "0.0.0";
}

export const buildInfo: BuildInfo = {
  version: getVersion(),
  commit: getCommit(),
  buildTime: process.env.BUILD_TIME ?? new Date().toISOString(),
};
