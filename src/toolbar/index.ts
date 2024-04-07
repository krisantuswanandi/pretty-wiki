import displayMenu from "./display";
import contentsMenu from "./contents";
import settingsMenu from "./settings";

export function addToolbar() {
  const toolbar = document.createElement("div");
  toolbar.id = "wrm-toolbar";

  toolbar.appendChild(displayMenu);
  toolbar.appendChild(contentsMenu);
  toolbar.appendChild(settingsMenu);
  document.body.appendChild(toolbar);
}
