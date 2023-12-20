// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let menorAltura = 0;
let maiorAltura = 0;

for (let i = 0; i < 3; i++) {
    let altura = parseFloat(prompt(`Digite a altura:`));

    
    if(altura > menorAltura || maiorAltura == 0){
        maiorAltura = altura;
    }

    if (altura < maiorAltura || menorAltura == 0) {
        menorAltura = altura;        
    }
}

console.log(`A menor altura é: ${menorAltura.toFixed(2)}`);
console.log(`A maior altura é: ${maiorAltura.toFixed(2)}`);
