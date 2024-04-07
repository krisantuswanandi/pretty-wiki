import { defineConfig } from "bumpp";

export default defineConfig({
  all: true,
  execute: "nr build",
  commit: "release v%s",
  tag: "v%s",
});
