//pour cet exercice on a recuperé le module readline-sync
var readline = require('readline-sync');

var captureNom = readline.question(`Quel est le nom du personnage ? `);
var captureAge = parseInt(readline.question(`Quel est son âge ? `));
var captuForce = parseInt(readline.question(`Quel est sa force ? `));
var personnage = {
    nom : captureNom,
    age : captureAge,
    carac : {
        force : captuForce
    }
}
console.log(`Quel est son nom ? ${personnage.nom}`);
console.log(`Quel est son âge ? ${personnage.age}`);
console.log(`Quel est sa force ? ${personnage.carac.force}`);
console.log(personnage);


