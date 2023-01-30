// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


// CREO ARRAY 
let listaUtente = [];

// CONTATORE 
let somma = 0;

// FINCHE' LA SOMMA E' MINORE DI 50 ESEGUI IL CODICE 
while (somma < 50) {
    // CHIEDO IL NUMERO ALL'UTENTE 
    let numeroUtente = parseInt(prompt('La somma è ' + somma + '. Inserisci un numero da 0 a 10.'));
    // CONTROLLO CHE IL NUMERO SIA VALIDO E COMPRESO TRA 0 E 10
    while (isNaN(numeroUtente) || numeroUtente > 10) {
        numeroUtente = parseInt(prompt('Hai sbagliato. La somma è ' + somma + '. Inserisci un numero da 0 a 10.'));
    }
    // AGGIUNGO NUMERO ALL'ARRAY E FACCIO LA SOMMA
    listaUtente.push(numeroUtente);
    somma += numeroUtente;
}
// RISULTATO 
alert('Sei arrivato a 50. La somma è ' + somma + '. I numeri inseriti sono ' + listaUtente);