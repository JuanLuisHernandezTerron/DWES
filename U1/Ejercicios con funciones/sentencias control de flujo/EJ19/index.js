// Realizar un programa que introduciendo el mes y el año devuelva el número de 
// días que tiene dicho mes. Recordar que hay que controlar si el año es bisiesto.

function add(){
    let mes = Number(document.getElementById("mes").value);
    let ano = Number(document.getElementById("ano").value);

    debugger
    switch (mes) {
        case 1:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 2:
            if(bisiesto(ano) == true){
                document.getElementById("resultado").innerHTML = "Este mes tiene 29 días";
            }else{
                document.getElementById("resultado").innerHTML = "Este mes tiene 28 días";
            }
        break;
        case 3:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 4:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 5:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 6:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 7:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 8:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 9:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 10:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 11:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        case 12:
            document.getElementById("resultado").innerHTML = "Este mes tiene 31 días";
        break;
        default:
            break;
    }
}

function bisiesto(ano){
    var es_bisiesto = new Boolean(false);

    if ((Number(ano) % 4 == 0) && ((Number(ano) % 100 != 0) || (Number(ano) % 400 == 0))){
        es_bisiesto = true;
    }

    return es_bisiesto;
}