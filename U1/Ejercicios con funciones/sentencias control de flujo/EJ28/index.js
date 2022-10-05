// Realizar un programa que se introduzca la fecha de nacimiento y devuelva el 
// signo del zodiaco.

function add(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;

    if((dia>=21&&mes==3)||(dia<=20&&mes==4))
        document.getElementById("resultados").innerHTML = "Aries"
    if((dia>=24&&mes==9)||(dia<=23&&mes==10))
        document.getElementById("resultados").innerHTML = "Libra"
    if((dia>=21&&mes==4)||(dia<=21&&mes==5))
        document.getElementById("resultados").innerHTML = "Tauro"
    if((dia>=24&&mes==10)||(dia<=22&&mes==11))
        document.getElementById("resultados").innerHTML = "Escorpio"
    if((dia>=22&&mes==5)||(dia<=21&&mes==6))
        document.getElementById("resultados").innerHTML = "Geminis"
    if((dia>=23&&mes==11)||(dia<=21&&mes==12))
        document.getElementById("resultados").innerHTML = "Sagitario"
    if((dia>=21&&mes==6)||(dia<=23&&mes==7))
        document.getElementById("resultados").innerHTML = "Cancer"
    if((dia>=22&&mes==12)||(dia<=20&&mes==1))
        document.getElementById("resultados").innerHTML = "Capricornio"
    if((dia>=24&&mes==7)||(dia<=23&&mes==8))
        document.getElementById("resultados").innerHTML = "Leo"
    if((dia>=21&&mes==1)||(dia<=19&&mes==2))
        document.getElementById("resultados").innerHTML = "Acuario"
    if((dia>=24&&mes==8)||(dia<=23&&mes==9))
        document.getElementById("resultados").innerHTML = "Virgo"
    if((dia>=20&&mes==2)||(dia<=20&&mes==3))
        document.getElementById("resultados").innerHTML = "Piscis"
}