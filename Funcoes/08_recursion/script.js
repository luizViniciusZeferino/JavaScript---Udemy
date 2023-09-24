// A função se auto-invoca  

function recursao(n) {
    if(n - 1 < 2 ) { // caso base: determina quando a função deve parar de se chamar
        console.log("Recursão parou")
    } else if(n % 2 != 0 ) { // Verificando se o resto da divisão de n por 2 é diferente de zero.
        console.log("Número ímpar " + n)
        recursao(n - 1) // Chamada recursiva 
    } else {
        console.log("Número par " + n)
        recursao(n - 2) // Chamada recursiva
    }
}

recursao(17)
recursao(39)
recursao(12)