//Crea tres radiobuttons, cuando uno de ellos se seleccione que muestre un 
//mensaje diciendo que opción se seleccionó.

function add(){
    const elemento = document.createElement("p");

    (document.getElementById("boton1").checked) ? document.getElementById("resultado").innerHTML = "Has seleccionado el primer boton" :
    (document.getElementById("boton2").checked) ? document.getElementById("resultado").innerHTML = "Has seleccionado el segundo boton":
    (document.getElementById("boton3").checked) ? document.getElementById("resultado").innerHTML = "Has seleccionado el tercer boton":
    "No has seleccion ningun boton";

}