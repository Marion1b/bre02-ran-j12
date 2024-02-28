
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
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80",
                "#7c00b5", "#659ea1", "#000000", "#8fcc00", "#8fcc00", "#ffb494", "#949dff", "#94d6ff"]);

    // le code de l'étape 2 se passe ici
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
