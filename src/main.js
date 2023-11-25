// Open & Close nav menu
const menu = document.querySelector(".menu-container");
const menuBtn = document.querySelector(".menu-icon");
const menuCloseBtn = document.querySelector(".close-icon");

menuBtn.onclick = function() {
    menu.classList.add("is-open");
}
menuCloseBtn.onclick = function() {
    menu.classList.remove("is-open");
}


// Close menu when activate anchor link
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        menu.classList.remove("is-open");
  })
}