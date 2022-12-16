//pour cet exercice on a recuperé le module readline-sync, utile que du côté serveur
const readline = require('readline-sync');

const puissance = readline.question('Puissance voulue ? ');
// const recupPuissance = puissance;
const chiffre = 2;
console.log(chiffre + ' a la puissance ' + puissance + ' = ' + Math.pow(chiffre, puissance) );
