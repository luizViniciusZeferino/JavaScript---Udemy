let ArgOpcional = (nome, idade) => {
    if(nome === undefined || idade === undefined) {
        console.log("ERROR")
    } else{
        console.log("Tudo certo ;)")
    }
}

ArgOpcional("luiz", 18)
ArgOpcional(18)
ArgOpcional("luiz")