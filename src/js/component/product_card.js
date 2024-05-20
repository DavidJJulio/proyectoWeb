import { LitElement, html, css } from "lit";
import { 
    getAllProducts, 
    getProductsWithoutElectronics,
    getJewelery,
    getMenClothing,
    getWomenClothing
 } from "../module/consulta.js";

export class productCard extends LitElement {
    static properties = {
        data: { type: Array },
        name: {type: String}
    };

    constructor() {
        super();
        this.data = [];
        this.name = '';
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
            height: 450px;
            background-color: var(--color-black);
            margin: 0.5%; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1.5%;
            gap: 20px;
        }
        img {
            width: 100%;
            height: 70%;
            border-radius: 20px;

        }
        p{
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        button {
            width: 100%;
            border: none;
            background-color: white;
            height: 15%;
            font-size: 1em;
            border-radius: 20px;
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
                <p>${val.title}</p>
                <img src ="${val.image}">
                <p>${val.price}$</p>
                <button>Agregar al carrito</button>
                </div>
            `)}
        </main>   
        `; 
    }
}

