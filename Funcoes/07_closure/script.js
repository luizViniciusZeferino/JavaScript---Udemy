// Sempre retornar uma função quando usar o closure
// closure lembra do escopo da função 

function armazenarSoma(a) { 
        return (b) => a + b // passando o parametro b e o retorno com arrow function
    }

let soma1 = armazenarSoma(5) 
console.log(soma1(5)) // resultado igual a 10 

// Com função normal

function armazenarSoma2(a){
    return function(b) {
        return a + b
    }
}

let soma2 = armazenarSoma2(10)
console.log(soma2(10)) // resultado igual a 20 

// mostrando de outra forma como é lembrado do escopo

function contador(i) {
    let cont = i
    let SomarContador = function() {
        console.log(cont)
        cont--
    }
    return SomarContador
}

let Meucontador = contador(5)
console.log(Meucontador())
console.log(Meucontador())
console.log(Meucontador())
console.log(Meucontador())