//DOMContentLoaded --> Espera a que cargue toda la estructura del documento,
//                      y después ejecuta el código de JS.

let indiceDeDiapositivaActual = 1;
document.addEventListener("DOMContentLoaded", function()
{
    mostrarDiapositiva(indiceDeDiapositivaActual);
});

function cambiarDiapositiva(n)
{
    mostrarDiapositiva(indiceDeDiapositivaActual += n);
}

function seleccionarDiapositiva(n) 
{
    mostrarDiapositiva(indiceDeDiapositivaActual = n);
}

function mostrarDiapositiva(n) 
{
    let i;
    let diapositivas = document.getElementsByClassName("diapositiva");
    let puntos = document.getElementsByClassName("circulo");
    if (n > diapositivas.length) 
    { 
        indiceDeDiapositivaActual = 1; 
    }    
    if (n < 1)
    { 
        indiceDeDiapositivaActual = diapositivas.length; 
    }
    for (i = 0; i < diapositivas.length; i++) 
    {
        diapositivas[i].style.display = "none";  
    }
    for (i = 0; i < puntos.length; i++) 
    {
        puntos[i].className = puntos[i].className.replace(" activo", "");
    }
    diapositivas[indiceDeDiapositivaActual - 1].style.display = "block";  
    puntos[indiceDeDiapositivaActual - 1].className += " activo";
}