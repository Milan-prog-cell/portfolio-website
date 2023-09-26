
 

 let header=document.querySelector("header");
 let menu=document.querySelector("#menu-icon");

 let navber=document.querySelector(".navber");


 window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow" ,window.scrolly > 0 );
 });

 menu.onclick=() => {
    navbar.classList.toggle("active");
 };
 window.onscroll = () =>{
    navbar.classList.remove("active");
 }

 let darkmode = document.querySelector("#darkmode");

 darkmode.onclick=() => {
    if(darkmode.classList.contains("bx-moon")){
        darkmode.classList.replace("bx-moon","bx-sun");
        document.body.classList.add("active");
    }else{
        darkmode.classList.replace("bx-sun","bx-moon");
        document.body.classList.remove("active");
    }
 }