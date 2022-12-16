const sportif_01 = {
    nom : `Toto`,
    age : 25,
    poid : 80,
    taille : 180,
    affichage : function(){
        return `nom : ` + this.nom + `\n` +`age : ` + this.age + `\n` +`poids : ` + this.poid + `\n` +`taille : ` + this.taille
    },
    force : function() {
        return (this.taille * this.poid) / this.age
    }
}

const sportif_02 = {
    nom : `Marcel`,
    age : 32,
    poid : 100,
    taille : 175,
    affichage : function(){
        return `nom : ` + this.nom + `\n` +`age : ` + this.age + `\n` +`poids : ` + this.poid + `\n` +`taille : ` + this.taille
    },
    force : function() {
        return (this.taille * this.poid) / this.age
    }
}

const comparationForce = {
    plusFort : function () {
        if (sportif_01.force() > sportif_02.force()) {
            return sportif_01.nom + ` est plus fort que ` + sportif_02.nom + ` ! voici ses informations : ` + `\n` + sportif_01.affichage()
        } else {
            return sportif_02.nom + ` est plus fort que ` + sportif_02.nom + ` ! voici ses informations : ` + `\n` + sportif_02.affichage()
        }
    }
}

console.log(comparationForce.plusFort());