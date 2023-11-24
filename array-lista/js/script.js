let frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
frutta.push('pesca');
console.log(frutta);

let cocomero_check = false;

for (let i = 0; i < frutta.length; i++) {
    if (frutta[i] === 'cocomero') {
        cocomero_check = true;
    }
}

if (cocomero_check) {
    console.log('Trovato! Devo solo preparare il cocktail.');
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!');
}