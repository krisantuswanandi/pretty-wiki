import metadata from "./metadata";
import { generateUserScript } from "./user-script";

const FILENAME = "dist/script.js";

export async function build() {
  try {
    const script = await generateUserScript();
    const result = `${metadata}
(function () {

"use strict";

${script}
})();
`;

    Bun.write(FILENAME, result);
  } catch {}
}

await build();
