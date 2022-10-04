// Realizar un programa para un concesionario que calcule el descuento de un 
// coche según su marca y modelo, en base a los siguientes datos:
// ● Si la marca es Renault tiene un 15% de descuento.
// ● Si la marca es Ford y el modelo es Fiesta tiene un descuento del 7%
// ● Si la marca es Ford y el modelo es Focus tiene un descuento del 10%
// ● El resto solo tiene un descuento del 5%

function add(){
    let precio = Number(document.getElementById("precio").value);
    let marca = document.getElementById("marca").value.toLowerCase;
    let modelo = document.getElementById("modelo").value.toLowerCase;
    debugger
    if(marca == "renault"){
        let precioFinal = ((precio*0.15));
        document.getElementById("resultados").innerHTML = "El precio final del Renault es "+ Number(precio-precioFinal);
    }else if(marca == "ford" && modelo == "fiesta"){
        let precioFinal = ((precio*0.07));
        document.getElementById("resultados").innerHTML = "El precio final del Ford Fiesta es "+ Number(precio-precioFinal);
    }else if(marca == "ford" && modelo == "focus"){
        let precioFinal = ((precio*0.10));
        document.getElementById("resultados").innerHTML = "El precio final del Ford Focus es "+ Number(precio-precioFinal);
    }else{
        let precioFinal = ((precio*0.05));
        document.getElementById("resultados").innerHTML = "El precio final del vehículo es "+ Number(precio-precioFinal);
    }
}