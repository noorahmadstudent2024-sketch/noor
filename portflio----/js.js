"use strict";

const refrigerationParts = {
  "n-comp": [
    "Compressor",
    "Raises the pressure and temperature of the refrigerant. I was trained in compressor diagnostics.",
    "Safety: isolate and lock out the power before opening any electrical panel.",
  ],
  "n-cond": [
    "Condenser",
    "Gets rid of the heat, with air or with water from a cooling tower. I was trained on air-cooled and water-cooled systems.",
    "Safety: hot surfaces, and working at height on rooftop units.",
  ],
  "n-meter": [
    "Metering device",
    "Drops the pressure before the evaporator, with a capillary tube or an expansion valve.",
    "Safety: wear gloves and goggles when handling refrigerant, and follow good servicing practices.",
  ],
  "n-evap": [
    "Evaporator",
    "Takes heat out of the space. AHU and FCU coils, chillers and fridges all use this same step.",
    "Safety: plant rooms and AHU rooms can be tight spaces, so check ventilation and use a permit to work.",
  ],
};

const infoPanel = document.getElementById("info");

function showPart(partId) {
  for (const id of Object.keys(refrigerationParts)) {
    document.getElementById(id).classList.toggle("on", id === partId);
  }

  const [title, description, safetyNote] = refrigerationParts[partId];
  infoPanel.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = title;

  const details = document.createElement("p");
  details.textContent = description;

  const safety = document.createElement("p");
  safety.className = "safe";
  safety.textContent = safetyNote;

  infoPanel.append(heading, details, safety);
}

for (const partId of Object.keys(refrigerationParts)) {
  const node = document.getElementById(partId);

  node.addEventListener("click", () => showPart(partId));
  node.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showPart(partId);
    }
  });
}

const burgerButton = document.getElementById("burger");
const menu = document.getElementById("menu");

function setMenuOpen(isOpen) {
  menu.classList.toggle("open", isOpen);
  burgerButton.setAttribute("aria-expanded", String(isOpen));
  burgerButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

burgerButton.addEventListener("click", () => {
  setMenuOpen(!menu.classList.contains("open"));
});

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    setMenuOpen(false);
  }
});
