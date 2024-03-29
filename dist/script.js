// ==UserScript==
// @name Wikipedia Reading Mode
// @namespace https://santus.dev/
// @version 0.0.1-alpha.1
// @description Read Wikipedia like you mean it.
// @author Krisantus Wanandi (https://github.com/krisantuswanandi)
// @match *://*.wikipedia.org/**
// @icon https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org
// @run-at document-body
// @license MIT
// @supportURL https://github.com/krisantuswanandi/wikipedia-reading-mode
// ==/UserScript==

(function () {

"use strict";

// src/style.ts
function injectStyle() {
  const style = document.createElement("style");
  style.innerHTML = `
#mw-page-base,
#my-page-base,
#mw-navigation,
#footer,
#toc,
.infobox,
.mw-indicators,
#siteSub
{
  display: none;
}

#content {
  margin-left: 0;
  font-family: serif;
}

#content .vector-body {
  font-size: 16px;
}
`;
  document.head.appendChild(style);
}

// src/utils.ts
function useVectorSkin() {
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

// src/index.ts
var init = function() {
  if (!useVectorSkin())
    return;
  injectStyle();
};
init();

})();
