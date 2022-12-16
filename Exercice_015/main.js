const myBtn = document.querySelector(`button`);
const myParagraf = document.querySelector(`p`);
const items = [`pile`, `face`]

myBtn.addEventListener("click", function(){

    var results = items[Math.floor(Math.random() * items.length)] ;
    console.log(results)

    myParagraf.innerHTML = results;

});
