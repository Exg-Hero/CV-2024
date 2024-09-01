
const Servidor = require("./Backend/Src/Server/Server");



async function IniciarServidor() {
    const servidor = new Servidor();
    await servidor.inicializar();
}
IniciarServidor();