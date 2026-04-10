import fs from "fs/promises"

async function ReadFile(file) {
    return await fs.readFile(file, "utf-8")
}

async function BuscarProducto(name){
    let content= JSON.parse(await ReadFile("./src/data/productos.json"))
    let found=false

    content.forEach(product => {
        if(product.nombre==name){
            console.log(`Producto encontrado\nNombre: ${product.nombre}\nPrecio: ${product.precio}`)
            found=true
        }
    })

    if (found==false){
        console.log(`Producto no encontrado`)
    }
}

BuscarProducto("Laptop")