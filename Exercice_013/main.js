var addInc = 0;

function increment() {
    
    var getP= document.querySelector(`p`);
    addInc++;
    getP.innerText = `Vous avez cliquez ` + addInc + ` fois`;
    
}
increment();