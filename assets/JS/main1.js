let image = document.querySelector('img');

image.addEventListener('click', () => {
    if(image.style.border == "2px solid red"){
        image.style.border = "2px solid blue";
    }
    else{
        image.style.border = "2px solid red";
    }
    
});