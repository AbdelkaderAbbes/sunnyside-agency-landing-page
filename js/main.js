const ham = document.getElementById("ham-menu");
const menu = document.getElementById("menu");

ham.onclick = function () {
  if ((menu.style.display = "none")) {
    menu.style.display = "flex";
  } else {
    menu.removeAttribute("display");
  }
};
