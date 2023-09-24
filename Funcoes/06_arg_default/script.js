function funcao (base, expoente=2) { // caso o usuária não defina um valor, ele será 2
    return Math.pow(base, expoente) // usando a biblioteca Math para fazer o calculo de potenciação
}

console.log(funcao(2))
console.log(funcao(2,3))
console.log(funcao(2,5))
