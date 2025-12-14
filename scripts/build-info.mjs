import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const commit = execSync("git rev-parse --short HEAD").toString().trim();
const version = JSON.parse(fs.readFileSync("package.json")).version;
const buildTime = new Date().toISOString();

const data = {
  version,
  commit,
  buildTime
};

// make sure src/data exists
const outputDir = path.resolve("src/data");
fs.mkdirSync(outputDir, { recursive: true });

// write file there
const outputPath = path.join(outputDir, "build-info.json");
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log("Build info generated:", data);
