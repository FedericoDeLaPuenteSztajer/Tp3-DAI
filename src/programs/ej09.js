function ValidarContrasenia(contra) {
    let validaciones = 0;

    if (contra.length >= 8) { validaciones++ }
    if (/[A-Z]/.test(contra)) { validaciones++ } //Método para verificar mayúsculas

    (contra.split("")).forEach(c => {
        if (!isNaN(parseInt(c))) { validaciones++ }
    })

    if (validaciones == 3) {
        console.log("Es válida")
    } else {
        console.log("Es inválida")
    }
}

ValidarContrasenia("orBal1naaaaaa")
