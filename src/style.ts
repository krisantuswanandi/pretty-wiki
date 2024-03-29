export function injectStyle() {
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
