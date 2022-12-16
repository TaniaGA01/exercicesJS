const select_firstName = document.querySelector(`#firstName`);
const select_lastName = document.querySelector(`#lastName`);
const select_email = document.querySelector(`#email`);
const select_phone = document.querySelector(`#phone`);
const select_password = document.querySelector(`#password`);
const select_confPass = document.querySelector(`#confPass`);

const regexExp = {
    firstName: /^[a-zA-ZÂ-ÿ\s]{2,20}$/,
    lastName: /^[a-zA-ZÂ-ÿ\sÁ]{2,20}$/,
    email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^[0-9]{2,10}$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/,
    confPass: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/
}

function fieldValidation(regexExp,input,field) {
    if(input.value === ``){
        document.querySelector(`#label__${field}`).className = ``;
        document.querySelector(`#${field}`).className = ``;
        document.querySelector(`#alert__${field}`).classList.add(`deleteMessage`);
    }else if (regexExp.test(input.value)) { // value es el valor del input
        document.querySelector(`#label__${field}`).className = `succes`;
        document.querySelector(`#${field}`).className = `borderSucces`;
        document.querySelector(`#alert__${field}`).classList.add(`deleteMessage`);
    }else {
        document.querySelector(`#label__${field}`).className = `error`;
        document.querySelector(`#${field}`).className = `borderError`;
        document.querySelector(`#alert__${field}`).classList.remove(`deleteMessage`);
        
    }
}


select_firstName.addEventListener('keyup', () =>{
    fieldValidation(regexExp.firstName, firstName,`firstName`);
})
select_lastName.addEventListener('keyup', () =>{
    fieldValidation(regexExp.lastName, lastName,`lastName`);
})
select_email.addEventListener('keyup', () =>{
    fieldValidation(regexExp.email, email,`email`);
})
select_phone.addEventListener('keyup', () =>{
    fieldValidation(regexExp.phone, phone,`phone`);
})
select_password.addEventListener('keyup', () =>{
    fieldValidation(regexExp.password, password, `password`);
})
select_confPass.addEventListener('keyup', () => {
    fieldValidation(regexExp.confPass, confPass, `confPass`);

    if (select_confPass.value === select_password.value) {
        console.log(`ror`, `lolo`)
    }
},
    
)
