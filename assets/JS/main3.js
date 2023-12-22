const password_1 = 911;
const password_2 = 714;
let btn = document.getElementById("button");
let message = document.getElementById("p");

btn.addEventListener('click', () => {
    let digito_1 = document.getElementById("digito_1").value;
    let digito_2 = document.getElementById("digito_2").value;
    let digito_3 = document.getElementById("digito_3").value;
    let password_i = parseInt(digito_1) + parseInt(digito_2) + parseInt(digito_3);
    if(password_1 == password_i){
        message.textContent = "Password 1 correcto";
    }
    else if(password_2 == password_i){
        message.textContent = "Password 2 correcto";
    }
    else{
        message.textContent = "Password incorrecto";
    }
});