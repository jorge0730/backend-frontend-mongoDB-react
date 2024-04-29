// conexión con db en mongoDb
const mongoose = require('mongoose');
require('dotenv').config();

const conexionBd = () => {
    mongoose 
    .connect(process.env.dbMongo)
    .then( () => console.log('Conexión con BD en curso'))
    .catch((err) => console.error(err));
}

module.exports = conexionBd;