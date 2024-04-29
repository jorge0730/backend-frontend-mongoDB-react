
const express = require('express');
const cors = require('cors');
const app = express();



// enlazar servidor con bd
const conexionBd = require('../config/db')
conexionBd();
app.use(cors());

// conexión con las rutas 
app.use(express.json());
//app.use('/api', require('../routes/routes'));
app.use('/', require('../routes/clienteRoutes'));
app.use('/', require('../routes/productoRoutes'));

// configurar servidor
const port = 5000;
app.listen(port, () => {
    console.log(`Servidor conectado por el puerto ${port}`);
});

//ruta para validar conexión del servidor desde postman
app.get('/info', (req,res) => {
    res.send('Si existe conexión con el servidor');
});
