// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Parola che inserisce l'utente
const userWord = prompt('Dimmi una parola');

const palindromaWord = isPalindromaOrNot(userWord);

if (userWord === palindromaWord) {
    alert('Questa è una parola palindroma');
} else {
    alert('Questa non è una parola palindroma');}
// Creazione funzione che comprende se la parola inserita è palindroma
// parola -> parola da verificare
// return: parola palindroma
function isPalindromaOrNot(word) {
    let reverseWord = '';
    // Scorriamo le lettere della parola
    for (let i = word.length -1; i >= 0; i--) {
        // Aggiungo a ogni ciclo le singole parole invertite
        reverseWord += word[i];
    }
    return reverseWord;
}

