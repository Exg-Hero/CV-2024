
const Servidor = require("./src/server/Server.js");



async function IniciarServidor() {
    const servidor = new Servidor();
    await servidor.inicializar();
}
IniciarServidor();