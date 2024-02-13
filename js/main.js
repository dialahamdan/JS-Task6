let button= document.querySelector(".btn")
let sideBar = document.querySelector(".sideBar")
let btnClose = document.querySelector(".btn-close")
let offcanvas = document.querySelector(".offcanvas-start")

button.onclick=function(){
    sideBar.classList.remove("sideBar");
    offcanvas.classList.add("show")
};
 

btnClose.onclick=function(){
    sideBar.classList.add("sideBar");
    
};

