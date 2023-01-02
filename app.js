const menuButton = document.querySelector("#menuButton");
const menuCloseButton = document.querySelector("#menuCloseButton");
const menu = document.querySelector("#sidebar");

let navOpen = menu.getAttribute("data-NavOpen");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();
  navOpen = menu.getAttribute("data-NavOpen");
  if (navOpen === "false") {
    menu.setAttribute("data-NavOpen", "true");
  } else if (navOpen === "true") {
    menu.setAttribute("data-NavOpen", "false");
  }
  menu.classList.toggle("-translate-x-80");
});

menuCloseButton.addEventListener("click", (e) => {
  e.preventDefault();
  navOpen = "false";
  menu.setAttribute("data-NavOpen", "false");
  menu.classList.add("-translate-x-80");
});
