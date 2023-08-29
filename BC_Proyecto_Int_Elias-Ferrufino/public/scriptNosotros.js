let contenedor = document.querySelector(".searchContainer");
let searchInput = document.querySelector(".searchInput");
let icono = document.querySelectorAll("i");

let cartContainer = document.querySelector(".cartContainer")
let cartListOrder = document.querySelector(".cartListOrder")
let active=false;
//OPEN SEARCH
icono[0].addEventListener("click", ()=>{
    if(!active){
        searchInput.classList.add("active");
        active=true
    }else {
        searchInput.classList.remove("active");
        active=false;
    }
})

//OPEN RESPONSIVE MENU
let  responsiveNavBar = document.querySelector(".responsiveNavBar")
let open=false;
icono[2].addEventListener("click", ()=>{
    if(!open){
        responsiveNavBar.classList.add("active");
        open=true
    }else {
        responsiveNavBar.classList.remove("active");
        open=false;
    }
})

