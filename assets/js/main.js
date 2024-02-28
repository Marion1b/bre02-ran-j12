
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;

    // le code de l'étape 1 se passe ici
    let elements = document.querySelectorAll('header div')
    for(let i = 0; i<colors.length; i++){
        elements[i].style.backgroundColor = colors[i]
    }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    let elements = document.querySelectorAll('header div')
    for(let i=0; i<elements.length; i++){
        elements[i].addEventListener('click', function(event){
            let elementColor = event.target.style.backgroundColor
            selectColor(event)
            console.log(getSelectedColor())
        })
    }

    // le code de l'étape 3 se passe ici
    let mainDiv = document.querySelectorAll('main div')
    for(let i=0; i<mainDiv.length; i++){
        mainDiv[i].addEventListener('click', function(event){
            let color = getSelectedColor(); 
            event.target.style.backgroundColor = color
        })
    }

});
