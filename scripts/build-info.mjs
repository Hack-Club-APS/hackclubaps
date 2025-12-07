import fs from "fs";
import { execSync } from "child_process";

const commit = execSync("git rev-parse --short HEAD").toString().trim();
const version = JSON.parse(fs.readFileSync("package.json")).version;
const buildTime = new Date().toISOString();

const data = {
  version,
  commit,
  buildTime
};

fs.writeFileSync("build-info.json", JSON.stringify(data, null, 2));
console.log("Build info generated:", data);
