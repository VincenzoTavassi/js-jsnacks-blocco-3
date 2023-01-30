// Ottieni un numero casuale in un range specificato.Chiedi all'utente il valore minimo ed il valore massimo del range in cui generare il numero.

// PROMPT ALL'UTENTE E PARSE A INT 
let userMinRange = parseInt(prompt('Inserisci il valore minimo'));
let userMaxRange = parseInt(prompt('Inserisci il valore massimo'));

// FINCHE' NON E' TUTTO CORRETTO CHIEDI I DUE RANGE
while (userMaxRange < userMinRange || isNaN(userMaxRange) || isNaN(userMinRange)) {
    userMaxRange = parseInt(prompt('Hai sbagliato. Inserisci il valore massimo'));
    userMinRange = parseInt(prompt('Inserisci il valore minimo'));
}

// ESEGUI IL CALCOLO RANDOM NEL RANGE SPECIFICATO 
let randomNumber = Math.floor(Math.random() * (userMaxRange - userMinRange + 1) + userMinRange);
alert(randomNumber);