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
    anchor.onclick = function() {
        menu.classList.remove("is-open");
  }
}

// Copy phone number when you click on it 
const delay = async (ms) => { await new Promise(resolve => setTimeout(resolve, ms)) };
const telNumber = document.querySelector(".tel-link");
const telSpan = document.querySelector(".tel-link-span");
telNumber.onclick = async function () {
    const copyInput = document.createElement("input");
    copyInput.setAttribute("type", "text");
    copyInput.setAttribute("value", "+38 (068) 443-94-26");
    copyInput.setAttribute("class", "temporary-input");
    menu.append(copyInput);
    document.querySelector(".temporary-input").select();
    document.execCommand("copy");
    document.querySelector(".temporary-input").remove();
    telSpan.style.display = "block";
    await delay(20);
    telSpan.style.transform = "translate(-50%, 150%)";
    telSpan.style.color = "transparent";
    await delay(1000);
    telSpan.style.display = "";
    telSpan.style.transform = "";
    telSpan.style.color = "";

}