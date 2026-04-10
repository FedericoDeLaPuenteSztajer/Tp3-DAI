import fs from "fs/promises"

async function ReadFile(file) {
    return await fs.readFile(file, "utf-8")
}

const CONTENT= JSON.parse(await ReadFile("./src/data/productos.json"))

async function GenerarCSV(){
    let write= "nombre,precio"

    CONTENT.forEach(product => {
        write+=`\n${product.nombre},${product.precio}`
    })

    fs.writeFile("./src/data/productos.csv", write)
    console.log("Contenido transcripto")
}

GenerarCSV()
