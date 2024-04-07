import listIcon from "../icons/list";

const toolbarPopup = document.createElement("div");
toolbarPopup.classList.add("wrm-toolbar-popup");
toolbarPopup.classList.add("coming-soon");
toolbarPopup.classList.add("hidden");

document.body.appendChild(toolbarPopup);

const menu = document.createElement("button");
menu.innerHTML = listIcon;
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
