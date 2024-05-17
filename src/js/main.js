import { productCard } from "./component/product_card";
import { productContainer } from "./component/product_container";
import { getpepe } from "./module/consulta.js";
getpepe

customElements.define("product-container", productContainer)
customElements.define("product-card", productCard)
console.log(await getpepe())