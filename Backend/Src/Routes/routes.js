
const { Router } = require('express');
const { getInfo } = require('../Controllers/Info.js');
const {getLanguages, getPersonas} = require("../Controllers/Info");

const rutasWeb = Router();

rutasWeb.get('/info', getInfo);
rutasWeb.get('/idiomas', getLanguages);
rutasWeb.get('/info/personas', getPersonas);

module.exports = rutasWeb;
