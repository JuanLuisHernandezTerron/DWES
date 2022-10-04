// Calcular el precio de un producto introduciendo la base imponible (BI) y 
// seleccionando el tipo de iva que se le aplica (normal:21%, reducido:10%) e 
// introduciendo el peso para calcular los gastos de envío (Peso < 1Kg: 3€, Peso< 
// 3kg:5€ y Peso>=3Kg 10€).
// Precio= BI + Cuota IVA (%sobreBI) + Gastos envío.

function add(){
    let BI = Number(document.getElementById("BI").value);
    let seleccion = document.getElementById("selector")
    let IVA = seleccion.options[seleccion.selectedIndex].text;
    let peso = Number(document.getElementById("peso").value);
    var precioFinal = 0;
    
    if(IVA == "normal"){
        if (peso < 1) {
            precioFinal = (BI * 0.21)+BI+3;
            document.getElementById("resultado").innerHTML = "El precio final es "+ precioFinal;
        } else if(peso < 3) {
            precioFinal = (BI * 0.21)+BI+5;
            document.getElementById("resultado").innerHTML = "El precio final es "+ precioFinal;
        }else{
            precioFinal = (BI * 0.21)+BI+10;
            document.getElementById("resultado").innerHTML = "El precio final es "+ precioFinal;
        }
    }else{
        if (peso < 1) {
            precioFinal = (BI * 0.10)+BI+3;
            document.getElementById("resultado").innerHTML = "El precio final es "+ precioFinal;
        } else if(peso < 3) {
            precioFinal = (BI * 0.10)+BI+5;
            document.getElementById("resultado").innerHTML = "El precio final es "+ precioFinal;
        }else{
            precioFinal = (BI * 0.10)+BI+10;
            document.getElementById("resultado").innerHTML = "El precio final es "+ precioFinal;
        }
    }

}