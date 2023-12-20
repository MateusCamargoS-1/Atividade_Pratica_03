// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

let cont = '';

for (let i = 30; i >= 1; i--) {
    let primo = true;

    if (i > 2 && i % 2 === 0) {
        primo = false;
    } else {
        for (let j = 3; j * j <= i; j += 2) {
            if (i % j === 0) {
                primo = false;
            }
        }
    }

    if (primo) {
        cont += `[${i}]`;
    } else {
        cont += `${i} `;
    }

    cont += ' ';
}

console.log(cont)