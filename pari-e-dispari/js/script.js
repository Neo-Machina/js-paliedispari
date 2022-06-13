// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Scelta dell'utente tra pari e dispari 
let evenOrOddUser = prompt('Scegli tra pari o dispari').toLowerCase();

while(evenOrOddUser !== 'pari' && evenOrOddUser !== 'dispari') {
    evenOrOddUser = prompt('Scegli tra pari o dispari').toLowerCase();
}

// Scelta dell'utente di un numero compreso tra 1 e 5
let userNumber = parseInt( prompt('Dimmi un numero tra 1 e 5') );

while(userNumber < 1 || userNumber > 5) {
    userNumber = parseInt( prompt('Dimmi un numero tra 1 e 5') );
}

// Variabile che rappresenta la somma tra il numero inserito dall'utente e un numero random 
let sumNumbers = twoNumbersSum(userNumber, generateRandomNumber(1, 5));
// Funzione che genera un numero random da 1 a 5
function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * max) + min;

    return randomNumber;
}

// Somma di due numeri
function twoNumbersSum(num1, num2) {
    const sum = num1 + num2;

    return sum;
}

// Richiamo della function checkWinner nella const isUserWinner
const isUserWinner = checkWinner(sumNumbers, evenOrOddUser);

if (isUserWinner === true) {
    alert(`Hai vinto !!! La somma dei due numeri è ${sumNumbers} e tu hai scelto ${evenOrOddUser}.`);
} else {
    alert(`Hai perso !!! La somma dei due numeri è ${sumNumbers} e tu hai scelto ${evenOrOddUser}.`);
}

// Stabilire se l'utente ha vinto o ha perso
function checkWinner (number, choice) {
    let userWinner = false;
    // se la scelta dell'utente e la somma dei 2 numeri è pari
    // oppure se la la scelta dell'utente e la somma dei 2 numeri è dispari, allora l'utente vince 
    // altrimenti perde
    if( (choice === 'pari' && number % 2 === 0) || (choice === 'dispari' && number % 2 !== 0) ) {
        userWinner = true;
    }

    return userWinner;
}
