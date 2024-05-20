import { productCard } from "./component/product_card";
import { productContainer } from "./component/product_container";
import { getProductsWithoutElectronics } from "./module/consulta.js";


customElements.define("product-container", productContainer)
customElements.define("product-card", productCard)
console.log(await getProductsWithoutElectronics())



let button = document.querySelectorAll("button");
let container = document.querySelector(".main__section")
let aside = document.querySelector(".aside__div_2")
button.forEach(val=>{
    val.addEventListener("click", (e)=>{
        for(let valor of button) valor.classList.remove('report__active');
        e.target.classList.add("report__active")
    
    if (e.target.innerHTML == "Todos los productos"){
        let element1 = document.querySelector("product-container")
        let shadow1 = element1.shadowRoot
        let element2 = shadow1.querySelector("product-card")
        let shadow2 = element2.shadowRoot
        console.log(shadow2)
        // console.log(e)
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
    
    
    })})
    button[0].click()