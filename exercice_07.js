//pour cet exercice on a recuperé le module readline-sync
var readline = require('readline-sync');

console.log(`========== EXERCIE 1 ============`);
var c1 = 123;
var c2 = 20;

function afficherResultatsDivisionParTrois(chiffre) {
    if(chiffre % 3 === 0){
        console.log(`le résultat de ` + chiffre + ` divisé par 3 est égal à ` + chiffre / 3);
    }else{
        console.log(chiffre + ` pas divisible par 3`);
    }
}
afficherResultatsDivisionParTrois(c1);
afficherResultatsDivisionParTrois(c2);


console.log(`============ EXERCIE 2 ===========`);

var questionNombre = readline.question('Quel nombre voulez-vous verifier ? ');
var fin = false;

while (!fin) {

    var numero = (questionNombre % 3 === 0); //El % indica si el numero a verificar es divisible por 3 

    if (isNaN(questionNombre)) {
        console.log( questionNombre + ` no es una cifra`);
        questionNombre = (readline.question('Quel nombre voulez-vous verifier ? '));
    } else if (numero ) {
        console.log(questionNombre + ` divisé par 3 = ` + questionNombre / 3);
        // fin = true;
        questionNombre = (readline.question('Quel nombre voulez-vous verifier ? '));
    } else {
        console.log(questionNombre + ` no es divisible par 3`);
        questionNombre = (readline.question('Quel nombre voulez-vous verifier ? '));
    }
}

