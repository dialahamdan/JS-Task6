let button= document.querySelector(".btn")
let sideBar = document.querySelector(".sideBar")
let btnClose = document.querySelector(".btn-close")
let offcanvas = document.querySelector(".offcanvas-start")
let body = document.querySelector("body")
button.onclick=function(){
    sideBar.classList.remove("sideBar");
    offcanvas.classList.add("show")
    body.classList.add("overlay")
};
 

btnClose.onclick=function(){
    sideBar.classList.add("sideBar");
    body.classList.remove("overlay")
    
};

