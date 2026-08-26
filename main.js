const button = document.getElementById("navbar_mobile_button");
const menu = document.getElementById("navbar_mobile_container");

button.addEventListener("click", () => {
    menu.classList.toggle("open");
});