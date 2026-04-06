//import productos from "./src/data/productos.json" with {type:"json"}
import fs from "fs/promises"

async function ReadFile(file) {
    return await fs.readFile(file, "utf-8")
}

let content= JSON.parse(await ReadFile("./src/data/productos.json"))

for (let product of content){
    console.log(product.nombre,": ",product.precio)
}
