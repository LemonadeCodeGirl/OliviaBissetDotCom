import fs from "fs";
import path from "path";

function parseEnvFile(filePath: string): Record<string, string> {
  const env: Record<string, string> = {};

  if (!fs.existsSync(filePath)) {
    return env;
  }

  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

function findProjectRoot(startDir: string): string {
  let dir = startDir;

  while (true) {
    if (fs.existsSync(path.join(dir, "package.json"))) {
      return dir;
    }

    const parent = path.dirname(dir);
    if (parent === dir) {
      return startDir;
    }

    dir = parent;
  }
}

function getEnvFileCandidates(): string[] {
  const projectRoot = findProjectRoot(__dirname);
  const cwd = process.cwd();

  return [
    path.join(projectRoot, ".env.local"),
    path.join(projectRoot, ".env.production.local"),
    path.join(projectRoot, ".env.production"),
    path.join(projectRoot, ".env"),
    path.join(projectRoot, "..", ".env.local"),
    path.join(cwd, ".env.local"),
    path.join(cwd, ".env.production.local"),
    path.join(cwd, ".env"),
    path.join(cwd, "..", ".env.local"),
  ];
}

let envLoaded = false;

export function ensureEnvLoaded() {
  if (envLoaded) return;
  envLoaded = true;

  const seen = new Set<string>();

  for (const filePath of getEnvFileCandidates()) {
    if (seen.has(filePath)) continue;
    seen.add(filePath);

    const parsed = parseEnvFile(filePath);
    for (const [key, value] of Object.entries(parsed)) {
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  }
}

export function describeEnvFileStatus(): string {
  const seen = new Set<string>();
  const statuses: string[] = [];

  for (const filePath of getEnvFileCandidates()) {
    if (seen.has(filePath)) continue;
    seen.add(filePath);

    statuses.push(`${filePath} (${fs.existsSync(filePath) ? "exists" : "missing"})`);
  }

  return statuses.join(", ");
}
