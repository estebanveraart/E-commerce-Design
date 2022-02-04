const hamburger = document.querySelector(".hamburger")
const closeHamburger = document.querySelector(".close-hamburger")
const navContent = document.querySelector(".nav-content")
const navBg = document.querySelector(".nav-bg")

export const initNav = () => {
    // Event click
    hamburger.addEventListener("click", () => {
        navContent.style.transform = "translateX(0%)"
        navBg.style.visibility = "visible"
    })

    closeHamburger.addEventListener("click", () => {
        navContent.style.transform = "translateX(-100%)"
        navBg.style.visibility = "hidden"
    })
}