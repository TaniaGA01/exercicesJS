var tab = [2, 6, 10, 3, 8, 7, 20];
var number = 0;

for (var i = 0; i < tab.length; i++) {
    var index = tab[i];
    if (index % 2 === 0) {
        number += index;
        console.log(`Itération : ` + i + ` : ` + number);
    }else{
        console.log(`Itération : ` + i + ` : ` + `non paire`);
    }
}
console.log(`le total est de : ` + number)
