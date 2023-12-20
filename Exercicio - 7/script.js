// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let valor = 0;

for(let i = 1; i <= 10; i++) {
    let num = parseInt(prompt('Insira um numero: '));

    valor += num;
}

let media = valor / 10;

console.log(media);
