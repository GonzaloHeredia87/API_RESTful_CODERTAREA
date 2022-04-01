const express = require('express');
const {Router} = express;
const app = express();
const productoRouter = Router();
app.use(express.static('public'))
const producto = require("./api/Producto.js");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 8888;
const Productos = new producto()
productoRouter.use('/api', productoRouter);

productoRouter.get('/', (req, res)=>{
    console.log('Hola estoy en productos');
    
    console.log(Productos.obtenerTodo());
    res.json(Productos.obtenerTodo());
});

productoRouter.post('/', (req, res)=>{
    console.log(req.query);
    const data = req.query;
    const resultado = Productos.crear(data.title, data.price, data.thumbnail);
    res.json(resultado);
});
productoRouter.put('/:id', (req, res)=>{
    console.log(req.params.id);
    res.json("in put");
});

productoRouter.delete('/:id', (req, res)=>{
    const index = req.params.id;
    res.json(Productos.borra(index));
});
app.use('/productos', productoRouter);

const server = app.listen(PORT, ()=>{
    console.log('servidor http en el puerto 8888');

});
server.on('error', error=>console.log(`Error en el servidor ${error}`));