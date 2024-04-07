/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { injectStyle } from "./style";
import { useVectorSkin } from "./utils";
import { addToolbar } from "./toolbar";

function init() {
  if (!useVectorSkin()) return;

  injectStyle();
  addToolbar();

  document.body.classList.add("wrm-enabled");
}

init();
