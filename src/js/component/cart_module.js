export function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || {};
}

export function getCont() {
    return JSON.parse(localStorage.getItem('cont')) || { count: 0 };
}

export function clearCart() {
    localStorage.removeItem('cart');
    localStorage.setItem('cont', JSON.stringify({ count: 0 }));
}
export function addToCart(product) {
    let i = document.querySelector("i");
    let cont = getCont();
    let count = cont.count || 0;
    count+=1;
    localStorage.setItem('cont', JSON.stringify({ count }));
    i.textContent = count;
    console.log(cont)
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
    let i = document.querySelector("i")
    let cont = getCont();
    let count = cont.count || 0;
    count-=1;
    localStorage.setItem('cont', JSON.stringify({count}));
    i.textContent = count;
    let cart = getCart();
    if (cart[productId]) {
        delete cart[productId];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}



