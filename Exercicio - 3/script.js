// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).

let multi = parseInt(prompt('Insira o multiplicando: '));
let i = parseInt(prompt('Insira um valor para a quantidade de interações: '));

for(let j = 0; j <= i; j++) {
    console.log(`${j} * ${multi} = ${j * multi}`);
}

