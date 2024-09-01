// database.js
const { MongoClient , ServerApiVersion} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

// Configuración de la conexión a MongoDB
const url = process.env.MBD; // Cambia esto si tu URI de MongoDB es diferente
//const dbName = ''; // Cambia esto por el nombre de tu base de datos

let db = null;

// Función para conectar a la base de datos
const connectToDatabase = async (DB) => {
    // if (db) {
    //     return db;
    // }

    const client = new MongoClient(url, {  });

    try {
        await client.connect();
        console.log('Conectado a MongoDB');
        db = client.db(DB);
        return db;
    } catch (err) {
        console.error('Error al conectar a MongoDB', err);
        throw err;
    }
};

// Función para insertar un documento
const insertDocument = async (collectionName,DB, document) => {
    const db = await connectToDatabase(DB);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(document);

    return result;
};

// Función para encontrar documentos
const findDocumentsCV = async (collectionName, DB, Idioma, query = {idioma: Idioma}) => {

    const db = await connectToDatabase(DB);
    const collection = db.collection(collectionName);
    const documents = await collection.find(query).toArray();

    await db.client.close();
    return documents;
};
const findLanguages = async (collectionName, DB, query) => {

    const db = await connectToDatabase(DB);
    const collection = db.collection(collectionName);
    const documents = await collection.find(query).toArray();

    await db.client.close();
    return documents;
};
const findPersonas = async (collectionName, DB, query) => {

    const db = await connectToDatabase(DB);
    const collection = db.collection(collectionName);
    const documents = await collection.find(query).toArray();

    await db.client.close();
    return documents;
};


// Función para actualizar documentos
const updateDocuments = async (collectionName,DB, filter, update) => {
    const db = await connectToDatabase(DB);
    const collection = db.collection(collectionName);
    const result = await collection.updateMany(filter, { $set: update });

    return result;
};

// Función para eliminar documentos
const deleteDocuments = async (collectionName,DB, filter) => {
    const db = await connectToDatabase(DB);
    const collection = db.collection(collectionName);
    const result = await collection.deleteMany(filter);
    return result;
};

module.exports = {
    insertDocument,
    findDocuments: findDocumentsCV,
    updateDocuments,
    deleteDocuments,findLanguages,findPersonas
};
