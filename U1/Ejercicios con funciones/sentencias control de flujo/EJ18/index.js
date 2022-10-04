// De un operario se conoce su sueldo y los años de antigüedad. Se pide realizar 
// un programa que lea los datos de entrada (sueldo y antigüedad) e informe de 
// su sueldo actualizado según las siguientes condiciones:
// ● Si el sueldo es inferior a 1000 y su antigüedad es igual o superior a 10 
// años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
// ● Si el sueldo es inferior a 1000 pero su antigüedad es menor a 10 años, 
// otorgarle un aumento de 5 %.
// ● Si el sueldo es mayor o igual a 1000 mostrar el sueldo en la página sin 
// cambios

function add(){
    let sueldo = Number(document.getElementById("sueldo").value);
    let anos = Number(document.getElementById("años").value);

    if (sueldo < 1000 && anos >= 10) {
        let formula = (sueldo*0.20) + sueldo;
        document.getElementById("resultado").innerHTML = "Su nuevo saldo es "+ formula;
    }else if (sueldo < 1000 && anos < 10){
        let formula = (sueldo*0.05) + sueldo;
        document.getElementById("resultado").innerHTML = "Su nuevo saldo es "+ formula;
    }else{
        document.getElementById("resultado").innerHTML = "Su saldo es "+ sueldo + " y su antiguedad es "+ anos;
    }
}