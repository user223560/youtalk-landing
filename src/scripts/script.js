
const hamburger = document.querySelector(".header__hamburger-menu")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")

hamburger.addEventListener("click", () => {
    console.log("Open hamburger")

    if(header.classList.contains("open")) {
        header.classList.remove("open")    // Close Hamburger Menu
        overlay.classList.remove("fade-in")
        overlay.classList.add("fade-out")
    } else {
        header.classList.add("open")    // Open Hamburger Menu
        overlay.classList.remove("fade-out")
        overlay.classList.add("fade-in")
    }
})