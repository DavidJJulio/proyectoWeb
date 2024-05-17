import {LitElement, html, css} from "lit"
import { getpepe } from "../module/consulta.js"

export class productCard extends LitElement{
    
    async getpepedesign() {
        let res = await getpepe();
        res.forEach(val =>{
            this.shadowRoot.innerHTML += html`juas`
        })
        
    }
    constructor(){
        super();
        this.getpepedesign()
        
    }

    static styles = css`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    .card {
        width: 24%;
        border-radius: 40px;
        height: 400px;
        background-color: red;
    }
    `
    

    
}