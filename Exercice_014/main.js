const getP = document.querySelector(`p`);
const getBtn = document.querySelector(`button`);

getBtn.addEventListener("click",function(){
    
    var newItem = ""; //se declara una variable vacia para luego llenarla con los items por cada boucle
    
    for (var i = 1; i <= 10; i++) {

        newItem += `3 * ` + i + ` = `  + (3 * i) + `<br/>`;
        
    }
    getP.innerHTML = newItem;
});

