const myBtn = document.querySelector(`button`);
const myParagraf = document.querySelector(`p`);

myBtn.addEventListener("click", function(){
    
    var nombres = Math.floor(Math.random() * 20);
    
    if (nombres <= 7) {
        var text = `petit`;
    }else if (nombres >= 8 && nombres <= 15) {
        var text = `moyen`;
    }else {
        var text = `grand`;
    }  
    
    myParagraf.innerHTML = (nombres + `<br/>` + text);

});
