const fs = require("fs");
const path = require("path");

function parseEnvFile(filePath) {
  const env = {};

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

const appDir = __dirname;
const envFromFile = {
  ...parseEnvFile(path.join(appDir, ".env")),
  ...parseEnvFile(path.join(appDir, ".env.local")),
  ...parseEnvFile(path.join(appDir, ".env.production")),
  ...parseEnvFile(path.join(appDir, ".env.production.local")),
};

module.exports = {
  apps: [
    {
      name: "oliviabisset",
      cwd: appDir,
      script: "node_modules/.bin/next",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
        ...envFromFile,
      },
    },
  ],
};
