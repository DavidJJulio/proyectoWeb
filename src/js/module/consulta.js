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
export const getJewelery= async() =>{
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









export const getAllSave = async() =>{
    let res = await fetch("http://localhost:5501/todos")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
            result.push(val)
    })
    return result
}

export const getWomenClothingSave = async() =>{
    let res = await fetch("http://localhost:5501/abrigo")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
            result.push(val)
    })
    return result
}

export const getMenClothingSave = async() =>{
    let res = await fetch("http://localhost:5501/camiseta")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
            result.push(val)
    })
    return result
}

export const getJewelerySave = async() =>{
    let res = await fetch("http://localhost:5501/pantalon")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
            result.push(val)
    })
    return result
}