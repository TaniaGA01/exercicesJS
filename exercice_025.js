// Exercice https://www.udemy.com/course/le-javascript-en-30-exercices/learn/lecture/15435074#questions

const classe = {
    student_01 : {
        nom : `Marc`,
        age : 21,
        notes : [12, 15, 13, 10, 7]
    },
    student_02 : {
        nom : `Eric`,
        age : 18,
        notes : [5, 15, 3, 8, 17]
    },
    student_03 : {
        nom : `Marie`,
        age : 22,
        notes : [10, 10, 11, 12, 11]
    },
    afficherEleve(eleve){
        var indexNote = ``;
        var notesEleve = ``;
        for (let i = 0; i < eleve.notes.length; i++) {
            indexNote = `Note ` + i  + ` - ` + eleve.notes[i] + `\n`;
            notesEleve +=  indexNote
        }
        return (`Nom : ` + eleve.nom + `\n` + `Âge : ` + eleve.age + `\n` + `Notes : `+ `\n` + notesEleve)
    },
    afficherClasse(){
        return this.afficherEleve(this.student_01) + `\n` + this.afficherEleve(this.student_02) + `\n` + this.afficherEleve(this.student_03)
    },
    calculerMoyenneEleve(eleve){
        var total  = 0;
        for (let i = 0; i < eleve.notes.length; i++) {
            total = total + eleve.notes[i]
        }
        return (total / eleve.notes.length)
    },
    calculerMoyenneClasse(){
        return `Voici la moyenne de la classe : ` + (this.calculerMoyenneEleve(this.student_01) + this.calculerMoyenneEleve(this.student_02) + this.calculerMoyenneEleve(this.student_03)) / 3
    }
    //Todos los "this" hacen referencia a la const classe
}
console.log(`Voici vos élèves : \n`)
console.log(classe.afficherClasse())
console.log(classe.calculerMoyenneClasse())

