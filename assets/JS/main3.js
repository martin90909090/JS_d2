const password_1 = 911;
const password_2 = 714;
let digito_1 = document.querySelector("digito_1").textContent;
let digito_2 = document.querySelector("digito_2").textContent;
let digito_3 = document.querySelector("digito_3").textContent;
let btn = document.querySelector("button").textContent;
let message = document.querySelector("p").textContent;
digito_1, digito_2, digito_3 = 0;
btn.addEventListener('click', () => {
    let password_i = digito_1 + digito_2 +digito_3;
    if(password_1 == password_i){
        message = "Password 1 correcto"
    }
    if(password_2 == password_i){
        message = "Password 2 correcto"
    }
    else{
        message = "Password incorrecto"
    }
});