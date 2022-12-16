var readline = require('readline-sync');
var menu = ` 1. Ajouter un chiffre \n 2. Afficher le tableau \n 3. Quitter`;
var tableau = [3, 5, 10, 12];

var menuChoise = '';

while (menuChoise != 3) {
    console.log(menu);
    var menuChoise = parseInt(readline.question(`Quel est votre choix ? `));
    switch (menuChoise) {
        case 1:
            var numberChoise = parseInt(readline.question(`Quel chiffre voulez-vous ajouter ? `));
            tableau.push(numberChoise);
            break;
        case 2:
            console.log(tableau.sort(function(a, b){return a - b}));
            break;
        case 3: 
            console.log(`A+`);
            break;
        default:
            console.log(`je n'ai pas compris`);
            break;
    }
}