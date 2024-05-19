import { LitElement, html, css } from "lit";
import { getpepe } from "../module/consulta.js";

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
        }
        .card {
            width: 24%;
            border-radius: 40px;
            height: 400px;
            background-color: red;
            margin: 0.5%; 
        }
    `;

    async firstUpdated() {
        this.data = await this.getpepedesign();
    }

    async getpepedesign() {
        let res = await getpepe();
        return res;
    }

    render() {
        return html`
        <main>
        ${this.data.map(val => html`
                <div class="card"></div>
            `)}
        </main>   
        `;
    }
}

