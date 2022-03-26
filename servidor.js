const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 8888;
const frase = 'Hola mundo como están?';



const server = app.listen(PORT, ()=>{
    console.log('servidor http en el puerto 8888');

});
server.on('error', error=>console.log(`Error en el servidor ${error}`));