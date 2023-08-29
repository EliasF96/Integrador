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

//OPEN CART
//CLOSE FROM ICON X
icono[3].addEventListener("click", ()=>{
    cartContainer.classList.remove("active")
    active=false
})
//OPEN FROM CART ICON
icono[1].addEventListener("click",()=>{
    if(!active){
        cartContainer.classList.add("active")
        active=true
    }else{
        cartContainer.classList.remove("active")
        active=false
    }
})

class Productos {
    constructor(id,img, name, desc, price) {
        this.id=id
        this.img = img
        this.name = name
        this.desc = desc
        this.price = price
    }
    getHtmlArticle() {
        return `
        <article id="${this.id}" class="card">
            <img src="../src/img/${this.img}" width="100px">
            <div class="product-info">
                    <h3>${this.name}</h3>
                    <p class="itemDesc">${this.desc}</p>
                    <p>Price: $${this.price}</p>
                <button class="buyButton">Order!</button>
            </div>
        </article> `
    }
    //METHOD TO ADD TO LIST
    getHtmlList() {
        return `
        <article id="${this.id}">
            <img src="../src/img/${this.img}" width="100px">
                <p>${this.name}</p>
                <p>Price: $${this.price}</p>
            </div>
        </article> `
    }
}
//NUEVO OBJETO
var producto1 = new Productos( 1, "baguette.png","Baguette", "Classic tradition dough with 80% hydration",450)
var producto2 = new Productos(2 ,"croissant.png","Croissant","Butter puff pastry with 2 turns: 1 simple and 1 double",250)
var producto3 = new Productos(3 ,"pan brioche.png","Brioche Bread","Fluffy brioche, egg and butter",1500)
var producto4 = new Productos(4,"pan de centeno.png","Rye bread","Dark crumb rye flour bread. Also suitable for diabetics",700)
var producto5 = new Productos(5,"pan de chocolate.png","Chocolate bread","Invented by August Zang, a roll of dough with 2 bars of semisweet chocolate",250)
var producto6 = new Productos(6,"pan de leche.png","Milk Bread","Light but tasty semi-sweet bread, made from a paste with eggs, fresh yeast, milk, butter and sugar",1000)
var producto7 = new Productos(7,"pan de salvado.png","Bran bread","Bread made of white, whole wheat flour and wheat bran with a spongy texture",1000)
var producto8 = new Productos(8,"pan de semillas.png","Seed bread","Based on the msa Tradicion, it contains flax, sesame and sunflower seeds.",750)
var producto9 = new Productos(9,"pan integral.png","Wholemeal bread","Coarsely ground organic wholemeal flour bread with the best preservation of its properties",1200)

let productsContainer = document.querySelector("section")
let newProducts =   producto1.getHtmlArticle()+
                    producto2.getHtmlArticle()+
                    producto3.getHtmlArticle()+
                    producto4.getHtmlArticle()+
                    producto5.getHtmlArticle()+
                    producto6.getHtmlArticle()+
                    producto7.getHtmlArticle()+
                    producto8.getHtmlArticle()+
                    producto9.getHtmlArticle()
productsContainer.innerHTML+= newProducts

//CREAR FUNCION PARA AÑADIR COMPRA
let buyButtons = document.querySelectorAll(".buyButton")
let cartCounter = document.querySelector(".cartCounter")
let cartList = []
let cartCounterNumber=0


cartCounter.innerHTML = cartCounterNumber
for(let i =0;i<buyButtons.length;i++) {
    buyButtons[i].addEventListener("click", (event) => {   alert(addItem(event, i+1) )}
)
}
function addItem(item,i){
    let confirmAddItem = confirm("Confirm add to cart?")
    if(confirmAddItem){
        var productoFunction = "producto"+i
       var producto = window[productoFunction]
       cartCounterNumber++
        cartCounter.innerHTML=cartCounterNumber
        cartListOrder.innerHTML+=producto.getHtmlList()

        cartList.push(producto)
        console.log(cartList)
        return "The item has been added to the cart"
    }else{
        return "Your item has been canceled"
    }
}

