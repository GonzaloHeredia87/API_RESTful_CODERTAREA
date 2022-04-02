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
productoRouter.get('/:id', (req, res)=>{

    const index = req.params.id;
    res.json(Productos.buscar(index));

});
productoRouter.post('/', (req, res)=>{
    
    let data = {};
    let resultado = {};
    // console.log(req.body.title);
    // console.log(req.query.title);

    if (req.query.title!=null){
        console.log('Es query params ');
        data = req.query;
        console.log(data);
        resultado = Productos.crear(data.title, data.price, data.thumbnail);
    }else if(req.body.title!=null){
        console.log('No es query params, es Body, viene de un post de html');
        data = req.body;
        resultado = Productos.crear(data.title, data.price, data.thumbnail);
        console.log(data);
    }
    
    
    
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