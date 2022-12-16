var line = `--------------------------------------------`;
var chat1 = creerAnimal('kity', 20, `femelle`);
var chat2 = creerAnimal('lilo', 12, `masculin`, `chat`);
var chat3 = creerAnimal('michou', 1, `masculin`,`chat`);
var chien1 = creerAnimal('Coco', 5, `femelle`, `chien`);
var chien2 = creerAnimal('Tobby', 6, `masculin`, `chien`);
var chien3 = creerAnimal('Goofy', 1, `masculin`,`chien`);
var chien4 = creerAnimal('Lazzy', 2, `femelle`,`chien`);

var chats = [chat1,chat2,chat3];
var chiens = [];
chiens.push(chien1, chien2, chien3, chien4);

function creerAnimal(nom, age, sexe){
    var animal = {};
    animal.nom = nom;
    animal.age = age;
    animal.sexe = sexe;
    return animal;
}

function afficherListeAnimal(liste){
    var txt = "";
    for (let i = 0; i < liste.length; i++) {
        txt += "Nom : " + liste[i].nom + "\n";
        txt += "Age: " + liste[i].age + "\n";
        if(liste[i].sexe){
            txt += "Sex : male\n";
        }else{
            txt += "Sex : femelle\n";
        }
        txt += "---------------";
        if (i !== liste.length -1) txt += "\n";
    }
    console.log(txt);
}

function calculerMoyenAge(liste){
    var moyenne = 0;
    for (let i = 0; i < liste.length; i++) {
        moyenne += liste[i].age;
    }
    return moyenne/liste.length;
}

afficherListeAnimal(chats);
console.log(`La moyenne d'age des ${chats.length} chiens est de : ${calculerMoyenAge(chats)} ans`)
console.log(line);
afficherListeAnimal(chiens);
console.log(`La moyenne d'age des ${chiens.length} chiens est de : ${calculerMoyenAge(chiens)} ans`);
console.log(line);