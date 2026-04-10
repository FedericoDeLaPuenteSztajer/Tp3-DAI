import fs from "fs/promises"
const CONTENT= JSON.parse(await ReadFile("./src/data/productos.json"))

async function ReadFile(file) {
    return await fs.readFile(file, "utf-8")
}

async function GenerarCSV(){
    write= "nombre,precio"

    CONTENT.forEach(product => {
        write+=`\n${product.nombre},${product.precio}`
    })

    if (found==false){
        console.log(`Producto no encontrado`)
    }
}

GenerarCSV()