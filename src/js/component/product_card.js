import { LitElement, html, css } from "lit";
import { getAllProducts, getProductsWithoutElectronics } from "../module/consulta.js";

export class productCard extends LitElement {
    static properties = {
        data: { type: Array }
    };

    constructor() {
        super();
        this.data = [];
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
        }
        .card {
            width: 24%;
            border-radius: 40px;
            height: 450px;
            background-color: #ff9500;
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
            height: 10%;
            font-size: 1em;
            border-radius: 20px;
        }
        button:hover {
            box-shadow: 0px 0px 5px 0px white;
            
        }
    `;

    async firstUpdated() {
        this.data = await this.getProductsWithoutElectronicsDesign();
    }

    async getProductsWithoutElectronicsDesign() {
        let res = await getProductsWithoutElectronics();
        return res;
    }

    render() {
        return html`
        <main>
        ${this.data.map(val => html`
                <div class="card">
                <p>${val.title}</p>
                <img src ="${val.image}">
                <button>Agregar al carrito</button>
                </div>
            `)}
        </main>   
        `;
    }
}

