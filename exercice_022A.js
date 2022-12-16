"use strict";

function addition() {
    let add01 = require('./exercice_022');
    var number = 0;
    for (var i = 1; i <= add01.question; i++) {
        number += i;
        console.log(`Step : ` + i + ` : ` + number);
    }
    console.log(`L'addittion des ` + add01.question + ` premiers nombres est : ` + number + `\n`)
}

function multiply() {
    let add02 = require('./exercice_022')
    var number = 1;
    for (var i = 1; i <= add02.question; i++) {
        number = number * i;
        console.log(`Step : ` + i + ` : ` + number);
    }
    console.log(`La multiplication des ` + add02.question + ` premiers nombres est : ` + number + `\n`)
}
module.exports = { addition, multiply };