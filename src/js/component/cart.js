import { LitElement, html, css } from 'lit';

import { getCart, clearCart } from './cart_module.js';

export class shoppingCart extends LitElement {
    static properties = {
        name: {type: String},
        cart: { type: Object }
    };

    constructor() {
        super();
        this.name = '';
        this.cart = getCart();
    }

    async firstUpdated() {
        
    }
    static styles = css`
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        height: 100%;
        background-color: black;
    }
    .card {
        width: 100%;
        height: 200px;
        background-color: gray;
        display: flex;
        align-items: center;
    }
    .img img{
        width: 120px;
        height: 140px;
    }
    `

    render() {
        if (this.name == "Carrito"){
          return html`
            <div class ="container">
                ${Object.values(this.cart).map(item => html`
                    <div class ="card">
                        <div class ="title"><p>${item.title}</p></div>
                        <div class ="img"><img src ="${item.image}"></div>
                        <div class ="price"><p>${item.price}</p></div>
                        <div class ="quantity"><p>${item.quantity}</p></div>
                    </div>
                `)}
                <button @click="${this.clearCart}">Vaciar Carrito</button>
            </div>
        `;  
        }  
    }

    clearCart() {
        localStorage.removeItem('cart');
        this.cart = {};
    }
}
