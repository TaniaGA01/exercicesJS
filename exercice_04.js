//pour cet exercice on a recuperé le module readline-sync
const readline = require('readline-sync');

const firstname = readline.question('Quel est votre prénom ? ');
const lastname = readline.question('Quel est votre nom ? ');
const age = parseInt(readline.question('Quel est votre âge ? '));//parseInt para transformar en entero

console.log('----------------------------------------------------------');
console.log('----------------------- BIENVENUE ------------------------');
console.log('----------------------------------------------------------');

console.log('Votre prénom est: ' + firstname);
console.log('Votre nom est: ' + lastname);
console.log('Votre âge est: ' + age);


