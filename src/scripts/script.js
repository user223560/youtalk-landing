
const hamburger = document.querySelector(".header__hamburger-menu")
const header = document.querySelector(".header")

hamburger.addEventListener("click", () => {
    console.log("Open hamburger")

    if(header.classList.contains("open")) {
        header.classList.remove("open")
    } else {
        header.classList.add("open")
    }
})