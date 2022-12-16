var readline = require('readline-sync');
let add = require('./exercice_022A');

do {
    
    var saisir = parseInt(readline.question(`Saisir l'action à realiser : \n1 : Addition des n premiers nombres \n2 : Multiplication des n premiers nombres \n3 : Quitter \n`));

    if (saisir === 1) {
        var question = parseInt(readline.question(`Combien de nombres : ? `));
        module.exports = {question};
        add.addition();
    }else if (saisir === 2) {
        var question = parseInt(readline.question(`Combien de nombres : ? `));
        module.exports = {question};
        add.multiply();
    }else if(saisir === 3){
        console.log(`A+`);
        break;
    }
    else{
        console.log(`je n'ai pas compris \n`);
    }
    
} while (question = true);

