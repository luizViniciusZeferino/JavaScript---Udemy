function tipoDeDado(dado) {

    if( typeof dado === "string") {
        console.log("O dado é do tipo string")
    } else if (typeof dado === "boolean") {
        console.log("O dado é do tipo boolean")
    } else {
        console.log("O dado é do tipo number")
    }
}


console.log(tipoDeDado(24))
console.log(tipoDeDado("Luiz"))
console.log(tipoDeDado(true))