
const hamburger = document.querySelector(".header__hamburger-menu")

hamburger.addEventListener("click", () => {
    console.log("Open hamburger")

    if(hamburger.classList.contains("open")) {
        hamburger.classList.remove("open")
    } else {
        hamburger.classList.add("open")
    }
})