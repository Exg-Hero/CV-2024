const express = require('express');
const cors = require('cors');
const {createServer} = require('http');
const rutasWeb = require('../Routes/routes.js');
const path = require('path'); // Necesario para gestionar rutas de archivos

class Server {
    constructor() {
        // Propiedades síncronas
        this.express = express();
        this.puerto = process.env.PORT || 8080;
        this.servidor = createServer(this.express);

    }

    async inicializar() {
        // Operaciones asíncronas, por ejemplo, configuración de middleware.
        await this.configurarMiddleWares();
        // Otras operaciones asíncronas si es necesario.
        // Luego puedes iniciar el servidor de manera asíncrona si es necesario.
        await this.iniciarServidor();


    }
    async rutas() {
        this.express.use('/', rutasWeb);
    }

    async configurarMiddleWares() {
        // Operaciones asíncronas aquí.
        //CORS
        this.express.use(cors());
        this.rutas();
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(express.static('Static'));
        // Redirigir todas las rutas no manejadas a `index.html`
        this.express.get('/*', (req, res) => {
            res.sendFile(path.resolve( '..', 'Backend_2024/Static', 'index.html'), (err) => {
                if (err) {
                    res.status(500).send(err);  // Si hay un error, envía un código de error 500
                }
            });});

    }

    async iniciarServidor() {
        // Operaciones asíncronas aquí.
        return new Promise((resolve) => {
            this.servidor.listen(this.puerto, () => {
                console.log(
                    // chalk.greenBright(`Servidor en linea: 🟢`),
                    // chalk.blueBright(`http://localhost:${this.puerto}`),
                    `Servidor en linea: 🟢 http://localhost:${this.puerto}`
                );
                resolve();
            });
        });
    }
}

module.exports = Server;