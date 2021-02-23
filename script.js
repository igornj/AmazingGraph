var navbar = document.querySelector(".nav-links")
var ham = document.querySelector(".toggle-button")

ham.addEventListener("click", togglehamburger)



function togglehamburger(){
    navbar.classList.toggle(".nav-links.active")
    ham.classList.toggle("")

}