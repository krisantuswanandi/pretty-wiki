import { watch } from "fs";
import path from "path";
import { build } from "./build";

const PORT = 3000;
const srcDir = path.join(import.meta.dir, "../src");

watch(srcDir, { recursive: true }, build);

Bun.serve({
  port: PORT,
  fetch() {
    const file = Bun.file("dist/script.js");
    return new Response(file);
  },
});

console.log(`URL: http://localhost:${PORT}/script.user.js`);
