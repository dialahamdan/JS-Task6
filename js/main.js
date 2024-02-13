let button= document.querySelector(".btn")
let sideBar = document.querySelector(".sideBar")
let btnClose = document.querySelector(".btn-close")

button.onclick=function(){
    sideBar.classList.remove("sideBar");
};

btnClose.onclick=function(){
    sideBar.classList.add("sideBar");
};

