function MultiplicandoNumeros(x,y,z) {
    return x * y * z
};

MultiplicandoNumeros(5,7,1)

console.log(MultiplicandoNumeros(5,2,0)); 

let mult = (MultiplicandoNumeros(5,2,1))

console.log(`O valor da multiplicação é ${mult}`)

function VerificacaoCarteira(idade,cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir")
    } else {
        console.log("Não pode dirigir ainda")
    }
}

console.log(VerificacaoCarteira(18, 0))
console.log(VerificacaoCarteira(20, 1))
console.log(VerificacaoCarteira(40, false))
console.log(VerificacaoCarteira(14, true))
