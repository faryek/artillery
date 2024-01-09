let burger_btn = document.getElementsByClassName("burger-enter")
let header = document.getElementsByClassName("header")
let burger_nav = document.getElementsByClassName("burger-nav")
let burger_back = document.getElementsByClassName("burger-back")

burger_btn[0].addEventListener("click", () => {
    header[0].style.cssText += "display: none;"
    burger_nav[0].style.cssText += "display: flex;"
})

burger_back[0].addEventListener("click", () => {
    header[0].style.cssText += "display: flex;"
    burger_nav[0].style.cssText += "display: none;"
})
