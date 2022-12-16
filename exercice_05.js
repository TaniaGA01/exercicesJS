//pour cet exercice on a recuperé le module readline-sync
let readline = require('readline-sync');

const question01 = parseInt(readline.question('Quelle table de multiplication voulez-vous afficher ? '));

for (let i = 0; i <= 10; i++) {
    const numbers = question01 * i;
    console.log(question01 +' x ' + numbers + ' = ' + question01 * numbers);
}

