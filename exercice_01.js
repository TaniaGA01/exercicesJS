let A = 1;
let B = 5;
console.log("------- Avant Inversion -------");
console.log(`A :` + ` ` + A);
console.log(`B :` + ` ` + B);

let temporaire = A; // se necesita una variable temporal para fijar el valor de A
A = B;
B = temporaire;
console.log("------- Après Inversion -------");
console.log(`A :` + ` ` + A);
console.log(`B :` + ` ` + B);