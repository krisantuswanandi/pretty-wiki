/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { injectStyle } from "./style";
import { useVectorSkin } from "./utils";
import { addToolbar } from "./toolbar";

function init() {
  injectStyle();
  document.body.style.display = "none";

  if (!useVectorSkin()) return;

  window.onload = () => {
    addToolbar();
    document.body.classList.add("wrm-enabled");
    document.body.style.display = "block";
  };
}

init();
