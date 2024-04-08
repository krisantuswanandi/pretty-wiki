import ellipsisIcon from "../icons/ellipsis";

function createItem(options: {
  label: string;
  onEnabled?: () => void;
  onDisabled?: () => void;
  checked?: boolean;
  shortcut?: string;
}) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = !!options.checked;
  input.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    if (target && target.checked) {
      options.onEnabled?.();
    } else {
      options.onDisabled?.();
    }
  });

  const title = document.createElement("div");
  title.innerHTML = options.label;

  const item = document.createElement("div");
  item.classList.add("wrm-settings-item");
  item.appendChild(title);
  item.appendChild(input);

  if (options.shortcut) {
    window.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === options.shortcut) {
        input.checked = !input.checked;
        input.dispatchEvent(new Event("change"));
      }
    });
    title.innerHTML += ` (${options.shortcut})`;
  }

  return item;
}

const enabledToggle = createItem({
  label: "Enabled",
  onEnabled: () => {
    document.body.classList.add("wrm-enabled");
  },
  onDisabled: () => {
    document.body.classList.remove("wrm-enabled");
  },
  checked: true,
  shortcut: "x",
});

const hideLinksToggle = createItem({
  label: "Hide Links",
  onEnabled: () => {
    document.body.classList.add("wrm-hide-links");
  },
  onDisabled: () => {
    document.body.classList.remove("wrm-hide-links");
  },
});

const openInNewTabToggle = createItem({
  label: "Open Links in New Tab",
  onEnabled: () => {
    document.querySelectorAll("a").forEach((link) => {
      if (link.href.startsWith("#")) return;
      link.target = "_blank";
    });
  },
  onDisabled: () => {
    document.querySelectorAll("a").forEach((link) => {
      link.removeAttribute("target");
    });
  },
});

const toolbarPopup = document.createElement("div");
toolbarPopup.classList.add("wrm-toolbar-popup");
toolbarPopup.classList.add("hidden");
toolbarPopup.appendChild(enabledToggle);
toolbarPopup.appendChild(hideLinksToggle);
toolbarPopup.appendChild(openInNewTabToggle);
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
