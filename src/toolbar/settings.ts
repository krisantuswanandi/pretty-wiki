import ellipsisIcon from "../icons/ellipsis";

const enableButton = document.createElement("input");
enableButton.type = "checkbox";
enableButton.checked = true;
enableButton.addEventListener("change", (event) => {
  const target = event.target as HTMLInputElement;
  if (target && target.checked) {
    document.body.classList.add("wrm-enabled");
  } else {
    document.body.classList.remove("wrm-enabled");
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "x") {
    enableButton.checked = !enableButton.checked;
    enableButton.dispatchEvent(new Event("change"));
  }
});

const enableTitle = document.createElement("div");
enableTitle.innerHTML = "Enabled (x)";

const settingsItem = document.createElement("div");
settingsItem.classList.add("wrm-settings-item");
settingsItem.appendChild(enableTitle);
settingsItem.appendChild(enableButton);

const toolbarPopup = document.createElement("div");
toolbarPopup.classList.add("wrm-toolbar-popup");
toolbarPopup.classList.add("hidden");
toolbarPopup.appendChild(settingsItem);
document.body.appendChild(toolbarPopup);

const menu = document.createElement("button");
menu.innerHTML = ellipsisIcon;
menu.classList.add("wrm-toolbar-button");
menu.addEventListener("click", () => {
  const popups = document.querySelectorAll(".wrm-toolbar-popup");
  popups.forEach((popup) => {
    if (popup !== toolbarPopup) {
      popup.classList.add("hidden");
    }
  });
  toolbarPopup.classList.toggle("hidden");
});

export default menu;
