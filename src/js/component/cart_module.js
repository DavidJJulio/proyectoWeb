export function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || {};
}

export function clearCart() {
    localStorage.removeItem('cart');
}

export function addToCart(product) {
    let cart = getCart();
    if (cart[product.id]) {
        cart[product.id].quantity++;
    } else {
        cart[product.id] = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart)
}

export function removeFromCart(productId) {
    let cart = getCart();
    if (cart[productId]) {
        delete cart[productId];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}