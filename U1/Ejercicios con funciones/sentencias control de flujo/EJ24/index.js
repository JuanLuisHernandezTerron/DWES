// Realizar un programa que simule un Juego de dados. El usuario empieza con 
// 50€ para apostar. El usuario indica a qué número apostar entre el 1 y el 6. Se 
// hace una asignación al azar entre 1 y 6. Si el usuario acierta, gana el doble de 
// lo apostado y si no acierta, pierde lo apostado. El juego acaba cuando el 
// usuario llega a 0€ (pierde) o llega a 200€ (gana).

var salarioInicial = 50;

do{
    let salarioAUX = salarioInicial
    let numeroRandom = parseInt(1+(Math.random()*7));
    
    debugger
    if(salarioInicial <= 0){
        document.getElementById("resultados").innerHTML = "No te queda dinero";
        break
    }else if( salarioInicial >= 200){
        document.getElementById("resultados").innerHTML = "Has ganado!";
        break
    }else{
        let numeroJugador = Number(prompt('A cual numero quieres apostar'));
        let apostado = Number(prompt('Cuanto quieres apostar?'));
        if (numeroJugador == numeroRandom){
            salarioInicial -= apostado;
            salarioInicial += apostado*2;
            document.getElementById("resultados").innerHTML = "Has acertado el numero tu saldo actual es "+ salarioInicial;
        }else{
            salarioInicial -= apostado ;
            document.getElementById("resultados").innerHTML = "Has fallado, tu saldo actual es de "+ salarioInicial ;
        }
    }
}while(salarioInicial > 0  && salarioInicial < 200);
