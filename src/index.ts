/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { injectStyle } from "./style";
import { useVectorSkin } from "./utils";

function init() {
  if (!useVectorSkin()) return;

  injectStyle();
}

init();
