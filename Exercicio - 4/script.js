// Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

let multi3 = 'É multiplo de 3: ';
let multi5 = 'É multiplo de 5: ';

for(let i = 1; i <= 250; i++) {
    if(i % 3 === 0){
        multi3 += i + ' ';
    }
    
    if (i % 5 === 0) {
        multi5 += i + ' ';
    }
}

console.log(multi3)
console.log(' ')
console.log(multi5)

