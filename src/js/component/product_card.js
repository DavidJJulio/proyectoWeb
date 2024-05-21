import { LitElement, html, css } from "lit";
import { 
    getAllProducts, 
    getProductsWithoutElectronics,
    getJewelery,
    getMenClothing,
    getWomenClothing
 } from "../module/consulta.js";
import { addToCart } from "./cart_module.js";


export class productCard extends LitElement {
    static properties = {
        data: { type: Array },
        name: {type: String},
    };

    constructor() {
        super();
        this.data = [];
        this.name = '';
        this.addToCart = addToCart;
        
    }

    static styles = css`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        main {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            overflow: scroll;
            color: white;
        }
        .card {
            width: 24%;
            border-radius: 40px;
            height: 560px;
            background-color: var(--color-black);
            margin: 0.5%; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1.5%;
            gap: 20px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 4fr 0.5fr 1fr;
            grid-template-areas:
            "title"
            "img"
            "price"
            "button"
            ;
        }
        .img {
            max-width: 100%;
            height: 350px;
            background-color: gray;
            border-radius: 20px;
            grid-area: img;

        }
        img {
            width: 100%;
            border-radius: 20px;
            height: 100%;
        }
        .title{
            width: 100%;
            min-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            grid-area: title;
        }
        .price {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100%;
            grid-area: price;
        }
        button {
            min-width: 100%;
            border: none;
            background-color: white;
            min-height: 100%;
            font-size: 1em;
            border-radius: 20px;
            grid-area: button;
        }
        button:hover {
            box-shadow: 0px 0px 5px 0px white;
            
        }
    `;

    async firstUpdated() {
        if (this.name == "Todos los productos"){
           this.data = await this.getProductsWithoutElectronicsDesign(); 
        }  
        if (this.name == "Ropa Mujer"){
            this.data = await this.getWomenClothingDesign(); 
         } 
        if (this.name == "Ropa Hombre"){
            this.data = await this.getMenClothingDesign(); 
        }
        if (this.name == "Accesorios"){
            this.data = await this.getJeweleryDesign(); 
        } 
    }

    async getProductsWithoutElectronicsDesign() {
        let res = await getProductsWithoutElectronics();
        return res;
    }

    async getWomenClothingDesign() {
        let res = await getWomenClothing();
        return res;
    }

    async getMenClothingDesign() {
        let res = await getMenClothing();
        return res;
    }

    async getJeweleryDesign() {
        let res = await getJewelery();
        return res;
    }

    render() {
           return html`
        <main>
        ${this.data.map(val => html`
                <div class="card">
                    <div class="title">
                        <p>${val.title}</p>
                    </div>
                    
                    <div class="img">
                        <img src ="${val.image}">
                    </div>
                    <div class="price">
                        <p>${val.price}</p>
                    </div>
                    <button class="compra" @click="${() => this.addToCart(val)}">Agregar al carrito</button>
                </div>
            `)}
        </main>   
        `; 
    }
}

