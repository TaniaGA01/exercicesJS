var line = `--------------------------------------------`;
var animals = [
    ['kity', 20, `femelle`, `chat`],
    ['lilo', 12, `masculin`, `chat`],
    ['michou', 1, `masculin`,`chat`],
    ['Coco', 5, `femelle`, `chien`],
    ['Tobby', 6, `masculin`, `chien`],
    ['Goofy', 1, `masculin`,`chien`],
    ['Lazzy', 2, `femelle`,`chien`]
]

var cats = ``;
var dogs = ``;
var totalAgeCats = 0;
var numberCats = 0;
var totalAgeDogs = 0;
var numberDogs = 0;

for (let i = 0; i < animals.length; i++) {
    var animal = animals[i];  
    var animalNom = animal[0];
    var animalAge = animal[1];
    var animalSex = animal[2];
    var animalType = animal[3];

    if(animalType === `chat`) {
        cats += (`Nom : ` + animalNom + `\n` + `Age : ` + animalAge + `\n` + `Sex : ` + animalSex  + `\n`+ line + `\n`);
        totalAgeCats += animal[1];
        numberCats++
    }
    if (animalType === `chien`) {
        dogs += (`Nom : ` + animalNom + `\n` + `Age : ` + animalAge + `\n` + `Sex : ` + animalSex  + `\n`+ line + `\n`);
        totalAgeDogs += animal[1];
        numberDogs++
        
    } 
}
console.log(cats);
console.log(`La moyenne d'âge des chats est de : ` + totalAgeCats / numberCats + ` ans.` + `\n`+ line + `\n`);
console.log(dogs);
console.log(`La moyenne d'âge des chats est de : ` + totalAgeDogs / numberDogs + ` ans.` + `\n`+ line + `\n`);







    
    

























