//import productos from "./src/data/productos.json" with {type:"json"}
import fs from "fs/promises"

let content= JSON.parse(await fs.readFile("./src//data/productos.json", "utf-8"))

for (let product of content){
    console.log(product.nombre,": ",product.precio)
}
