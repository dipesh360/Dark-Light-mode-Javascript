"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector("#dark");
  const label = document.querySelector(".label");
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero__section");

  checkbox.addEventListener("change", () => {
    header.classList.toggle("header-dark");
    heroSection.classList.toggle("hero__section-dark");
    if (header.classList.contains("header-dark")) {
      label.textContent = "Disable Dark Mode";
    } else {
      label.textContent = "Enable Dark Mode";
    }
  });
});
