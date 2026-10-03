import fs from "node:fs";
import path from "node:path";

/**
 * Server-only check for files in /public. Lets the site show images and the
 * resume only when the real file has been added, instead of a broken image.
 */
export function publicFileExists(publicPath: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}
