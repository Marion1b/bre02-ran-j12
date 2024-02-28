
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
function loadPalette()
{

    // le code de l'étape 1 se passe ici
    let elements = document.querySelectorAll('header div')
    let input = document.querySelectorAll('header div input')
    for(let i = 0; i<input.length; i++){
        elements[i].style.backgroundColor = input[i].value
    }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette()
    // le code de l'étape 2 se passe ici
    let input = document.querySelectorAll('header div input')
    for(let i=0; i<input.length; i++){
        input[i].addEventListener('input', function(){
            loadPalette()
        })
    }
    let headerDiv = document.querySelectorAll('header div')
    for(let i=0; i<headerDiv.length; i++){
        headerDiv[i].addEventListener('click', function(event){
            selectColor(event)
            console.log(getSelectedColor())
        })

};

    // le code de l'étape 3 se passe ici
    let mainDiv = document.querySelectorAll('main div div')
    for(let i=0; i<mainDiv.length; i++){
        mainDiv[i].addEventListener('click', function(){
            let color = getSelectedColor(); 
            console.log(mainDiv[i].style)
            if(mainDiv[i].style.backgroundColor){
               mainDiv[i].style.backgroundColor = ""
            }else{
               mainDiv[i].style.backgroundColor = color
            }
        })
    }

});
