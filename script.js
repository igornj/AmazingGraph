

/*const $navlinks =  document.querySelector('.nav-links')
const $togglebutton =  document.querySelector('.toggle-button')


$togglebutton.addEventListener('click',function(){
    $navlinks.classList.add('menu_open')

})*/


/*var abrir = document.querySelector('.nav-links')
  function abrir(){
    if(abrir == .style.display = "none")
    
    
    document.getElementById("toggle-button").onclick = function() 
    document.getElementById("nav-links").style.display = "flex";
  }
   
  document.getElementById("toggle-button").onclick = function() {
    document.getElementById("nav-links").style.display = "none";
  }


  function abrir() 
  {if(abrir == 'fechado') {document.querySelector('.nav-links').style.display = "flex"};*/





/*var navbar = document.querySelector(".nav-bar")
var ham = document.querySelector(".toggle-button")



function togglehamburger(){
    navbar.classList.toggle(".nav-links.ul")
    ham.classList.toggle(".nav-links.ul")

}

ham.addEventListener("click", togglehamburger)*/


/*var ham = document.querySelector(".toggle-button")

ham.onclick = function(){
  {document.querySelector('.nav-links').style.display = "flex"

}*/




var menu = document.querySelector('.menu')
var ham = document.querySelector(".toggle-button")

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("menu")) {
     menu.classList.remove("menu");
     menu.style.display = "flex";
  } else {
    menu.classList.add("menu");
    menu.style.display = "none";
  }
}