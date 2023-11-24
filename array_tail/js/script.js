let num_elementi = parseInt(prompt('Inserisci il numero di elementi per l\'array:'));
let num_casuali = [];

for (let i = 0; i < num_elementi; i++) {
    let num_casuale = Math.floor(Math.random() * 100) + 1;
    num_casuali.push(num_casuale);
}
console.log('Array completo:', num_casuali);

let ultimiCinqueElementi = num_casuali.slice(-5);
console.log('Ultimi 5 elementi:', ultimiCinqueElementi);