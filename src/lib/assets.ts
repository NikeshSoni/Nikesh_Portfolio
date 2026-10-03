import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Server-only check for a file in /public. Lets components show a neutral
 * frame (instead of a broken image) until you add the real file.
 */
export function assetExists(publicPath: string) {
  return existsSync(path.join(process.cwd(), "public", publicPath));
}
