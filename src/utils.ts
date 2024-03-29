export function useVectorSkin() {
  const SKIN_KEY = "useskin";
  const SKIN_VAL = "vector";

  const search = new URLSearchParams(window.location.search);
  const skin = search.get(SKIN_KEY);
  const isVectorSkin = skin === SKIN_VAL;

  if (!isVectorSkin) {
    const newurl = new URL(window.location.href);
    newurl.searchParams.set(SKIN_KEY, SKIN_VAL);
    window.location.href = newurl.toString();
  }

  return isVectorSkin;
}
