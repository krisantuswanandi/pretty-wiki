export function injectStyle() {
  const style = document.createElement("style");
  style.innerHTML = `
body.wrm-enabled {
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
    font-family: serif;
    margin-left: 0;
  }

  #content .vector-body {
    font-size: 16px;
  }
}

body.wrm-enabled.wrm-hide-links a {
  color: #202122;
}

body.wrm-enabled.wrm-hide-refs sup {
  display: none;
}

#wrm-toolbar {
  align-items: center;
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid #ddd;
  bottom: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 4px;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: 4px;
  position: fixed;
  z-index: 1000;
}

.wrm-toolbar-button {
  background-color: transparent;
  border: none;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  width: 40px;
  height: 40px;
  padding: 8px;

  svg {
    width: 100%;
    height: 100%;
    color: #000;
  }
}
.wrm-toolbar-button:hover {
  background-color: #f0f0f0;
}

.wrm-toolbar-popup {
  position: fixed;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  padding: 8px;
  width: 240px;
  z-index: 1000;
}
.wrm-toolbar-popup.hidden {
  display: none;
}
.wrm-toolbar-popup.coming-soon:before {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #bbb;
  font-style: italic;
  content: "Coming soon";
}

.wrm-settings-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}
`;
  document.head.appendChild(style);
}
