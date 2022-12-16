var voiture = { // un objet
    inmatriculation : `DQW456FG`,
    marque : `Toyota`,
    annee : 2012,
    carac : { // un objet dans un objet
        km : 120.000,
        couleur : `bleu`,
        puissance : 7
    }
}
console.log(`la voiture d'inmatriculation  ${voiture.inmatriculation} , de marque  ${voiture.marque} date de  ${voiture.annee} ... elle a ${voiture.carac.km} kms` );
