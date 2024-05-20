import {LitElement, html, css} from "lit"

export class productContainer extends LitElement{

    static properties = {
        name: {type: String},
    };

    constructor(){
        super();
        this.name = ''
    }
    
    static styles = css`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .section {
        display: flex;
        padding: 1.5%;
        width:  100%;
        height:  100%;
        background-color: var(--color-black);
        content: contain;
    }

    .section__div {
        width: 100%;
        height: 100%;
        border-radius: 40px;
        padding: 2.5%;
        padding-bottom: 13.5%;
        background-color: var(--color-white);
        display: flex;
        gap: 5%;
        flex-direction: column;
        contain: content;
        overflow-y: scroll;
    }
    
    h1 {
        font-size: 2em;
        padding-top: 1%;
        color: var(--color-black);
    }
    `
    render(){
        return html`
        <section class ="section">
            
            <div class ="section__div">
            <div class="section__header">
                <h1>${this.name}</h1>
            </div>
                <product-card name ="${this.name}"></product-card>
            </div>
        </section>
        `
    }
    
}

