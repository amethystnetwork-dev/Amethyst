/**
 * Creates additional HTML files for svelte-routing to work correctly.
 */
import { copyFile } from "node:fs/promises";

const buildURL = new URL("./dist/", import.meta.url);
const indexURL = new URL("index.html", buildURL);

const paths = [
    'apps',
    'games',
    'credits',
    'settings',
    // for static file hosts
    '404'
];

for (const path of paths) {
  const output = new URL(`${path}.html`, buildURL);

  try {
    await copyFile(indexURL, output);
  } catch (err) {
    if (err?.code !== "EEXIST") throw err;
  }
}