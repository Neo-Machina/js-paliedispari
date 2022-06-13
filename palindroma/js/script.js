// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


 
isPalindromaOrNot('otto');

// Creazione parola che comprende se la parola inserita è palindroma
// parola -> parola da verificare
// return: booleano, true se la parola è palindroma altrimenti false 
function isPalindromaOrNot(word) {
    let palindromaWord = false;
    // Scorriamo le lettere della parola
    for (let i = word.length -1; i >= 0; i--) {
        console.log(word[i]);
        console.log(i);
        const reverseName = word.length -1 - i;
        console.log(reverseName);

        if (word === reverseName) {
            palindromaWord = true;
        }

        return palindromaWord;
    }
}

