const DB = require("../DataBase/DB.js");

const getInfo = async ( req, res)=>{
            // Encontrar documentos
    try {
        let documento = req.param('documento');
        let idioma = req.param('idioma');
        let baseDatos = req.param('BaseDatos');
        let info = await DB.findDocuments(documento,baseDatos,idioma);
        res.json(info);
        console.log(baseDatos);
        documento = '';
        idioma  = '';
        baseDatos = '';
        info = '';
    }catch(err){
        console.log(err);
    }

}
const getLanguages = async ( req, res)=> {
    // Encontrar documentos
    try {
        let documento = req.param('documento');
        let baseDatos = req.param('BaseDatos');
        let languages = await DB.findLanguages(documento, baseDatos);
        res.json(languages);
        documento = '';
        baseDatos = '';
        languages = '';
    } catch (err) {
        console.log(err);
    }
}
const getPersonas = async ( req, res)=>{
    // Encontrar documentos
    try {
        let documento = req.param('documento');
        let baseDatos = req.param('BaseDatos');
        let languages = await DB.findPersonas(documento,baseDatos);
        res.json(languages);
    }catch(err){
        console.log(err);
    }

}
module.exports = {
    getInfo,getLanguages, getPersonas,
};