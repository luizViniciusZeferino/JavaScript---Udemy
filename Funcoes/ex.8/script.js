function tamanhoTexto(texto) {
     if(texto.length > 10) {
        console.log("Texto muito longo")
     }else{
        console.log("Texto dentro do limite")
     }
}

tamanhoTexto("10")
tamanhoTexto("Testando se é maior que 10")
tamanhoTexto("1")
