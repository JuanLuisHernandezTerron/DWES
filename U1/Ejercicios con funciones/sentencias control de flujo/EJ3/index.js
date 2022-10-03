//Crea tres radiobuttons, cuando uno de ellos se seleccione que muestre un 
//mensaje diciendo que opción se seleccionó.

function add(){
    const elemento = document.createElement("p");
    if(document.getElementById("boton1").checked){
        document.getElementById("resultado").innerHTML = "Has seleccionado el primer boton";
    }else if(document.getElementById("boton2").checked){
        document.getElementById("resultado").innerHTML = "Has seleccionado el segundo boton";
    }else if(document.getElementById("boton3").checked){
        document.getElementById("resultado").innerHTML = "Has seleccionado el tercer boton";
    }
}