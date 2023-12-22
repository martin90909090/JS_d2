let paragraph = document.getElementById("paragraph");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let cantidad_1 = document.getElementById("cantidad_1").value;
    let cantidad_2 = document.getElementById("cantidad_2").value;
    let cantidad_3 = document.getElementById("cantidad_3").value;
    let c_total = parseInt(cantidad_1) + parseInt(cantidad_2) + parseInt(cantidad_3);
    if(c_total >= 0 && c_total <= 10){
        paragraph.textContent = "Van " + c_total + " stickers"; 
    }
    else if(c_total > 10){
        paragraph.textContent = "Llevas demasiados stickers";
    }
});