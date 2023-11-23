const menu = document.querySelector(".menu-container");
const menuBtn = document.querySelector(".menu-icon");
const menuCloseBtn = document.querySelector(".close-icon");

menuBtn.onclick = function() {
    menu.classList.add("is-open");
}
menuCloseBtn.onclick = function() {
    menu.classList.remove("is-open");
}