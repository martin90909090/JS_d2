let cantidad_1 = document.getElementById("cantidad_1");
let cantidad_2 = document.getElementById("cantidad_2");
let cantidad_3 = document.getElementById("cantidad_3");
let paragraph = document.getElementById("paragraph");
let btn = document.getElementById("btn");
cantidad_1 = 0, cantidad_2 = 0, cantidad_3 = 0;

btn.addEventListener("click", () => {
    let c_total = cantidad_1 + cantidad_2 + cantidad_3;
    if(c_total >= 0 && c_total <= 10){
        paragraph.textContent = "Van " + c_total + " stickers"; 
    }
    else if(c_total > 10){
        paragraph.textContent = "Llevas demasiados stickers";
    }
});