//ABRIR MENU RESPONSIVO
let  responsiveNavBar = document.querySelector(".responsiveNavBar")
let icono = document.querySelector("#responsiveMenuIcon")
let open=false;
icono.addEventListener("click", ()=>{
    if(!open){
        responsiveNavBar.classList.add("active");
        open=true
    }else {
        responsiveNavBar.classList.remove("active");
        open=false;
    }
})