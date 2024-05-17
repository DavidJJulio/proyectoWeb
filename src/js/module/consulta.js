export const getpepe = async() =>{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    return data
}