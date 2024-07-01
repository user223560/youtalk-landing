
const body = document.querySelector("body")
const hamburger = document.querySelector(".header__hamburger-menu")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade")

hamburger.addEventListener("click", () => {
    console.log("Open hamburger")

    if(header.classList.contains("open")) {
        body.classList.remove("noscroll")
        header.classList.remove("open")    // Close Hamburger Menu
        fadeElems.forEach( (element) => {
            element.classList.remove("fade-in")
            element.classList.add("fade-out")
        } )
    } else {
        body.classList.add("noscroll")
        header.classList.add("open")    // Open Hamburger Menu
        fadeElems.forEach( (element) => {
            element.classList.remove("fade-out")
            element.classList.add("fade-in")
        })
    }
})