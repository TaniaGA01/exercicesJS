var line = `--------------------------------------------`;
var cats = [
    ['Kitty', 4, `femelle`],
    ['Lilo', 4, `male`],
    ['Michou', 1, `male`],
    [`Yiyo`, 6, `femelle`]
]

var numberCats = 0
var totalAgeCats = 0;

for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    console.log(`Nom : ` + cat[0] + `\n` + `Age : ` + cat[1] + `\n` + `Sex : ` + cat[2] );
    console.log(line);

    totalAgeCats += cat[1];
    numberCats = cats.length;
}
console.log(`La moyenne d'âge des chats est de : ` + totalAgeCats / numberCats + ` ans.`);
console.log(line);

var dogs = [
    ['Tobby', 4, `male`],
    ['Lucas', 4, `male`],
    ['Samy', 3, `femelle`]
]
var numberDogs = 0
var totalAgeDogs = 0;

for (var i = 0; i < dogs.length; i++) {
    var dog = dogs[i];
    console.log(`Nom : ` + dog[0] + `\n` + `Age : ` + dog[1] + `\n` + `Sex : ` + dog[2] );
    console.log(line);

    totalAgeDogs += dog[1];
    numberDogs = dogs.length;
}
console.log(`La moyenne d'âge des chiens est de : ` + totalAgeDogs / numberDogs + ` ans.`);


















