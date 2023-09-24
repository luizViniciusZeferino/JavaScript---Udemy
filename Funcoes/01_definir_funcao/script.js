function imprimirUmNumero(num) {
    console.log(`O número é: ${num}`);
}

imprimirUmNumero(2); 

const numeroAleatorio = function() { // criando uma função anonima atrelada a uma variavel e usando o Math(biblioteca integrada do JS) para gerar um número aleatório
    console.log(Math.random());
};

numeroAleatorio(); // chamando a função 