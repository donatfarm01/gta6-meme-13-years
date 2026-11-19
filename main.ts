import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The entry post must be a real, public X status URL. Refuse to copy a
// placeholder or malformed URL so a bad entry can never be submitted.
const postPath = join(botDir, "POST.json");
const post = JSON.parse(readFileSync(postPath, "utf8"));
const url = post?.url;
const statusUrl = /^https:\/\/(?:x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
if (typeof url !== "string" || !statusUrl.test(url)) {
  console.error(
    `Invalid entry post URL in POST.json: ${JSON.stringify(url)} (expected https://x.com/<handle>/status/<digits>)`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));
