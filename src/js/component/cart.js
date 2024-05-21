import { LitElement, html, css } from 'lit';

import { getCart, clearCart, removeFromCart } from './cart_module.js';

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
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        padding: 10px;
        height: 100%;
        background-color: black;
    }
    .card {
        width: 100%;
        height: 200px;
        background-color: gray;
        display: flex;
        align-items: center;
        justify-content: space-around
    }
    img{
        width: 120px;
        height: 140px;
    }
    .card div{
        width: 120px;
        height: 140px;
        display: flex;
        align-items: center;
    }
    i{
        color: white;
    }
    .icon {
        background-color: black;
    }
    .trash{
        width: 120px;
        height: 140px;
        background-color: white;
        border: none;
    }
    .vaciar {
        width: 200px;
        height: 100px;
    }
    `

    render() {
        if (this.name == "Carrito") {
            return html`
                <div class ="container">
                    ${Object.values(this.cart).map(item => html`
                        <div class ="card">
                            <div class ="title"><p>${item.title}</p></div>
                            <div class ="img"><img src ="${item.image}"></div>
                            <div class ="price"><p>${item.price}$</p></div>
                            <div class ="quantity"><p>Cantidad: ${item.quantity}</p></div>
                            <div class ="icon">
                                <button class ="trash" @click="${() => this.removeFromCart(item.id)}">
                                    <img src ="./src/assets/img/trash.jpg">
                                </button>
                            </div>
                        </div>
                    `)}
                    <button class ="vaciar" @click="${this.clearCart}">Vaciar Carrito</button>
                </div>
            `;
        }
    }

    clearCart() {
        localStorage.removeItem('cart');
        this.cart = {};
    }

    removeFromCart(productId) {
        removeFromCart(productId); 
        this.cart = getCart(); 
    }
}
