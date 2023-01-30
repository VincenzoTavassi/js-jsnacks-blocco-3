// Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti.

// PROMPT E ID DEL TAG PER IL RISULTATO 
let numeroUtente = parseInt(prompt('Inserisci un numero'));
let risultatoEl = document.getElementById('risultato');

// DEFINISCO VARIABILE ULTIMO NUMERO E ARRAY 
let lastNumber = 0;
let typedNumbers = [];

do {
    // INSERISCO NUMERO UTENTE NELLA LISTA 
    typedNumbers.push(numeroUtente);
    // AGGIORNO L'ULTIMO NUMERO 
    lastNumber = numeroUtente;
    // CHIEDO UN ALTRO NUMERO 
    numeroUtente = parseInt(prompt('Inserisci un altro numero'));
    // RIPETO FIN QUANDO IL NUMERO UTENTE E' INFERIORE ALL'ULTIMO NUMERO 
} while (numeroUtente > lastNumber);

// INSERISCO L'ULTIMO NUMERO IN LISTA 
lastNumber = numeroUtente;
typedNumbers.push(lastNumber);

// STAMPO RISULTATO
risultatoEl.innerHTML = `I numeri inseriti sono <strong>${typedNumbers}</strong> e l'ultimo numero era ${lastNumber}`;
