import "./style.css";

const navButton = document.querySelector("#menu");
const menuBar = document.querySelector('[role="menubar"]');

navButton.addEventListener("click", () => {
  const menuExpands = JSON.parse(navButton.getAttribute("aria-expanded"));
  navButton.setAttribute("aria-expanded", !menuExpands);
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});
