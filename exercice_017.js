//pour cet exercice on a recuperé le module readline-sync
var readline = require('readline-sync');

var answer = parseInt(readline.question(`Saisir le chiffre correct :`));

// while (answer !== 3) {
//     console.log(`Vous n'avez pas saisie le bon chiffre`);
//     answer = parseInt(readline.question(`Saisir le chiffre correct :`));
// }
// console.log(`Bravo !!`);

do{
    console.log(`Vous n'avez pas saisie le bon chiffre`);
    answer = parseInt(readline.question(`Saisir le chiffre correct :`));
}while (answer !== 3);
console.log(`Bravo !!`);