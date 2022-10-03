// Realizar un programa que pida cargar una fecha cualquiera, luego verificar si 
// dicha fecha corresponde a Navidad (se debe cargar por separado el dia, el mes 
// y el año)

function add(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;

    if(Number(dia) != 25 || Number(mes) != 12){
        document.getElementById("resultado").innerHTML = "Las fechas no coinciden con navidad";
    }else{
        document.getElementById("resultado").innerHTML = "Las fechas coinciden con navidad";
    }
}

