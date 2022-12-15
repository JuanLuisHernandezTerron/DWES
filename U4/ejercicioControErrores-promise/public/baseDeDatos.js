let objetoAExportarAlFinal = {};

objetoAExportarAlFinal.validarUsuario = function(nombreUsuario){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            (nombreUsuario !== "amornun") ? resolve("OK:Usuario no existente") : reject("ERRROR: Usuario ya existente");
        },2000);
    });
}

module.exports = objetoAExportarAlFinal;