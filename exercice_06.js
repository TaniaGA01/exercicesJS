//pour cet exercice on a recuperé le module readline-sync
var readline = require('readline-sync');
var questionNombre = parseInt(readline.question('Quel nombre voulez-vous saisir ? '));
var fin = false;

while (!fin) {
    if (questionNombre === parseInt(questionNombre) ) {
        console.log(`Le chiffre saisi est : ` + questionNombre);
        fin = true;
    }else{
        console.log(`Veillez recommencer la saisie, vous devez saisir un nombre`);
        questionNombre = parseInt(readline.question('Quel nombre voulez-vous saisir ? '));
    }
}
    
