import { shoppingCart } from "./component/cart.js";
import { productCard } from "./component/product_card";
import { productContainer } from "./component/product_container";
import { getProductsWithoutElectronics, getWomenClothingSave } from "./module/consulta.js";

customElements.define("shopping-cart", shoppingCart)
customElements.define("product-container", productContainer)
customElements.define("product-card", productCard)

let button = document.querySelectorAll("button");
let container = document.querySelector(".main__section")
button.forEach(val=>{
    val.addEventListener("click", (e)=>{
        for(let valor of button) valor.classList.remove('report__active');
        e.target.classList.add("report__active")
    
    if (e.target.innerHTML == "Todos los productos"){
        container.innerHTML = `
        <product-container name ="Todos los productos"></product-container>
        `
    }
    if (e.target.innerHTML == "Ropa Mujer"){
        container.innerHTML = `
        <product-container name ="Ropa Mujer"></product-container>
        `
    }
    if (e.target.innerHTML == "Ropa Hombre"){
        container.innerHTML = `
        <product-container name ="Ropa Hombre"></product-container>
        `
    }
    if (e.target.innerHTML == "Accesorios"){
        container.innerHTML = `
        <product-container name ="Accesorios"></product-container>
        `
    }
    if (e.target.innerHTML == "Carrito"){
        container.innerHTML = `
        <product-container name ="Carrito"></product-container>
        `
    }
    
    
    })})
    button[0].click()