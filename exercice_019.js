//pour cet exercice on a recuperé le module readline-sync
var readline = require('readline-sync');

var number = parseInt(readline.question(`Quel nombre voudriez-vous factoriser ? `));

console.log(`Factorielle de ` + number + `<br/>`);

var mult = 1;

for (var i = 1; i <= number; i++) {
    mult = mult * i;
    console.log(`Etape ` + i + ` : ` + mult);
}
console.log(`Le résultat de factorielle de `+ number +` est ` + mult)

