// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// PROMPT E ID DEL TAG PER IL RISULTATO 
let numeroUtente = parseInt(prompt('Inserisci un numero'));
let risultatoEl = document.getElementById('risultato');

// FINCHE' NON RAGGIUNGI IL NUMERO DELL'UTENTE, ESEGUI IL CICLO
let i = 1;
while (numeroUtente >= i) {
    // CREA UN ARRAY
    let currentList = [];
    // FAI UN CICLO PER INSERIRE 10 NUMERI CASUALI DA 1 A 100 NELL'ARRAY CREATO 
    for (let y = 0; y < 10; y++) {
        let newNumber = Math.floor(Math.random() * 100) + 1;
        currentList.push(newNumber);
    }
    // STAMPA IL RISULTATO PER OGNI ARRAY CREATO 
    risultatoEl.innerHTML += `Array creato numero <strong>${i}</strong>: <strong>${currentList}</strong><br>`;
    alert('Array creato numero ' + i + ': ' + currentList);
    i++;
}