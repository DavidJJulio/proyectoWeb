import {LitElement, html, css} from "lit"

export class productContainer extends LitElement{
    static styles = css`
    .section {
        padding: 1%;
        width:  100%;
        height:  100%;
        background-color: black;
    }

    .section__div {
       
        background-color: white;
    }
    `
    render(){
        console.log("funciona")
        return html`
        <section class ="section">
            <div class ="section__div">

            </div>
        </section>
        `
    }
}
