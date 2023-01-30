// Genera un numero a caso compreso tra 1-100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente. Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente. 

// HTML 
const risultatoEl = document.getElementById('risultato');
// GENERO UN NUMERO CASUALE 
const secretNumber = Math.floor((Math.random() * 100) + 1);
console.log(secretNumber);

// CHIEDO ALL'UTENTE UN NUMERO 
let userNumber = parseInt(prompt('Indovina il numero segreto. Scegli un numero da 1 a 100.'));

// ESEGUO IL CODICE FINCHE' I NUMERI SONO DIVERSI 
let i = 0;
while (userNumber != secretNumber) {
    // CONTROLLO CHE IL NUMERO SIA VALIDO
    if (isNaN(userNumber) || userNumber > 100 || userNumber <= 0) {
        userNumber = parseInt(prompt('Non è un numero valido. Inserisci un numero da 1 a 100 per indovinare.'));
        // SE IL NUMERO NON E' VALIDO RIDUCO DI UNO L'ITERATORE PER TENERE TRACCIA DEI SOLI TENTATIVI VALIDI
        i--;
    }
    // SE IL NUMERO INSERITO E' PIU' PICCOLO O PIU' GRANDE DI QUELLO SEGRETO, INFORMO L'UTENTE 
    else if (userNumber > secretNumber) {
        alert('Il numero segreto è minore di quello che ha inserito');
        userNumber = parseInt(prompt('Prova di nuovo. Indovina il numero segreto.'));
    } else {
        alert('Il numero segreto è maggiore di quello che ha inserito');
        userNumber = parseInt(prompt('Prova di nuovo. Indovina il numero segreto.'));
    }
    i++
}

// QUANDO I NUMERI SONO IDENTICI SI ESCE DAL CICLO E STAMPO IL RISULTATO 
risultatoEl.innerHTML = 'Hai indovinato. Il numero era proprio ' + secretNumber + '. Ci sono voluti ' + (i + 1) + ' tentativi!';