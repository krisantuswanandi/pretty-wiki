export async function generateUserScript() {
  const build = await Bun.build({
    entrypoints: ["src/index.ts"],
  });

  return build.outputs[0].text();
}
