export const getAllProducts = async() =>{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    return data
}

export const getProductsWithoutElectronics = async() =>{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
            if(val.category != "electronics"){
                result.push(val)
            }
    })
    return result
}

export const getWomenClothing = async() =>{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(val.category == "women's clothing"){
            result.push(val)
        }
    })
    return result
}

export const getMenClothing = async() =>{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(val.category == "men's clothing"){
            result.push(val)
        }
    })
    return result
}

export const getJewelery = async() =>{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(val.category == "jewelery"){
            result.push(val)
        }
    })
    return result
}