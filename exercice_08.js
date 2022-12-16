//pour cet exercice on a recuperé le module readline-sync
var readline = require('readline-sync');

console.log(`Solution 01`);
var motAVerifier = readline.question(`Quel mot voulez-vous vérifier ?`);

if(motAVerifier.length < 8){
    console.log(motAVerifier.length); // number
    console.log(`${motAVerifier.length}`); // string --> ECMAScript 6 (ES6)
}else{
    console.log(`le mot fait plus de 8 characteres`);
}
