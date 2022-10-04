//. Escribe un programa que pida al usuario un día de la semana y que muestre un 
// mensaje con el día siguiente. 
// Si se introduce un valor que no corresponda a un día de la semana, se le 
// mostrará un mensaje al usuario.

function add(){

    switch (document.getElementById("dia").value.toLowerCase()) {
        case "lunes":
            document.getElementById("resultado").innerHTML = "Martes"
            break;
        case "martes":
            document.getElementById("resultado").innerHTML = "Miercoles"
            break;
        case "miercoles":
            document.getElementById("resultado").innerHTML = "Jueves"
            break;
        case "jueves":
            document.getElementById("resultado").innerHTML = "Viernes"
            break;
        case "viernes":
            document.getElementById("resultado").innerHTML = "Sabado"
            break;
        case "sabado":
            document.getElementById("resultado").innerHTML = "Domingo"
            break;
        case "domingo":
            document.getElementById("resultado").innerHTML = "Lunes"
            break;
        default:
            document.getElementById("resultado").innerHTML = "Has introducido mal el dia de la semana"
            break;
    }
}