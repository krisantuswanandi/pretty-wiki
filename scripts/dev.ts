import { watch } from "fs";
import path from "path";
import { build } from "./build";

const srcDir = path.join(import.meta.dir, "../src");

watch(srcDir, { recursive: true }, build);

Bun.serve({
  port: 3000,
  fetch() {
    const file = Bun.file("dist/script.js");
    return new Response(file);
  },
});
