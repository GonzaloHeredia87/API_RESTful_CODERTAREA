const express = require('express');
const {Router} = express;
const app = express();
const productoRouter = Router();
const producto = "require(./api/producto.js)";
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 8888;




const server = app.listen(PORT, ()=>{
    console.log('servidor http en el puerto 8888');

});
server.on('error', error=>console.log(`Error en el servidor ${error}`));