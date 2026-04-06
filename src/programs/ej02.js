import fs from "fs/promises"
const PRODUCTOS= "./src/data/productos.json"

async function ReadFile(file) {
    return await fs.readFile(file, "utf-8")
}

async function AgregarProductos(nombre, precio) {

    let content = JSON.parse(await ReadFile(PRODUCTOS))

    content.push({ "nombre": nombre, "precio": precio })
    fs.writeFile(PRODUCTOS, JSON.stringify(content))

    for (let product of content) {
        console.log(product.nombre, ": ", product.precio)
    }

}

AgregarProductos("Laptop", "2000")
