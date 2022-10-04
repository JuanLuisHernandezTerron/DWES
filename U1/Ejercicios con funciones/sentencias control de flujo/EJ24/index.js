// Realizar un programa que simule un Juego de dados. El usuario empieza con 
// 50€ para apostar. El usuario indica a qué número apostar entre el 1 y el 6. Se 
// hace una asignación al azar entre 1 y 6. Si el usuario acierta, gana el doble de 
// lo apostado y si no acierta, pierde lo apostado. El juego acaba cuando el 
// usuario llega a 0€ (pierde) o llega a 200€ (gana).

var salarioInicial = 50;

while(salarioInicial != 0){
    function add(){
        let numeroRandom = Number(1+(Math.random()*7));
        let numeroJugador = Number(document.getElementById("numero").value);
        
    }
}