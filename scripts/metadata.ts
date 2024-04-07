import rawManifest from "../manifest.json";
import { version } from "../package.json";

const manifest: Record<string, string | Array<string>> = rawManifest;

const rawMetadata = Object.keys(manifest)
  .map((key) => {
    const value = manifest[key];

    if (Array.isArray(value)) {
      return value.map((v) => `// @${key} ${v}`);
    }
    return `// @${key} ${value}`;
  })
  .flat()
  .join("\n");

const metadata = `// ==UserScript==
${rawMetadata}
// @version ${version}
// ==/UserScript==
`;

export default metadata;
