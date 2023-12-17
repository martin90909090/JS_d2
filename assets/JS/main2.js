let cantidad_1 = document.getElementById("cantidad_1").textContent;
let cantidad_2 = document.getElementById("cantidad_2").textContent;
let cantidad_3 = document.getElementById("cantidad_3").textContent;
let paragraph = document.getElementById("paragraph").textContent;
let btn = document.getElementById("btn");
cantidad_1 = 0, cantidad_2 = 0, cantidad_3 = 0;
let c_total = cantidad_1 + cantidad_2 + cantidad_3;

btn.addEventListener("click", () => {
    if(c_total <= 10){
        paragraph.textContent = "Van " + c_total + " stickers"; 
    }
    else{
        paragraph.textContent = "Llevas demasiados stickers";
    }
});