const express = require('express');
const {Router} = express;

const app = express();

app.use(express.static('public'));

const routerMascotas = Router();

const routerPersonas = Router();
routerPersonas.use(express.json());
routerPersonas.use(express.urlencoded({extended: true}));
routerPersonas.use('/api', routerPersonas);

routerMascotas.use(express.json());
routerMascotas.use(express.urlencoded({extended: true}));
routerMascotas.use('/api', routerMascotas);
const PORT = 8888;
const frase = 'Hola mundo como están?';
const mascotas = [];


//Mascotas
routerMascotas.get('/', (req, res)=>{
    res.json(mascotas);
});

routerMascotas.post('/', (req, res)=>{
    mascotas.push(req.body);
    res.json(mascotas);
})
// Personas
const personas = [];

routerPersonas.get('/', (req, res)=>{
    res.json(personas);
});

routerPersonas.post('/', (req, res)=>{
    personas.push(req.body);
    res.json(personas);
})


app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

// app.get('/api/frase/', (req, res)=>{
//     // console.log(req.params.id); // de esta forma accedo a al params con /params
//     // if (Object.entries(req.query).length >0){
//     //     res.json({ 
//     //         result: 'Hola mundo analizando los query params',
//     //         query: req.query
            
//     //     });
//     // }else{
//     //     res.json({msg: 'Hola mundo sin query params'});
//     // }
//     res.send(frase);
// });
// app.get('/api/letras/:num', (req, res)=>{
//     // console.log(req.params.id); // de esta forma accedo a al params con /params
//     //const parabras = frase.split();
//     const num = req.params.num;
//     if (isNaN(num)){
//     res.status(404).send({
//         error: 'El parametro no es un numero'
//     });

//     }
//     else{
//         res.send(frase[num]);
//     }
    
    
// });
// app.get('/api/parabras/:num', (req, res)=>{
//     // console.log(req.params.id); // de esta forma accedo a al params con /params
//     const parabras = frase.split(' ');
//     const param = req.params.num;
//     res.send(parabras[param]);
// });

// // Vamos con el POST, PUT y DELETE
// app.post('/api/message', (req, res)=>{
//     // console.log(req.params.id); // de esta forma accedo a al params con /params
//     const message = req.body;
//     res.json({
//         body: message
//     });
// });
// app.put('/api/message/:id', (req, res)=>{
//     // console.log(req.params.id); // de esta forma accedo a al params con /params
//     const id = req.params.id;
//     const message = req.body;
//     res.json({
//         id: id,
//         body: message
//     });
// });

// app.delete('/api/message/:id', (req, res)=>{
//     // console.log(req.params.id); // de esta forma accedo a al params con /params
//     const id = req.params.id;
//     res.json({
//         id: id
//     });
// });


const server = app.listen(PORT, ()=>{
    console.log('servidor http en el puerto 8888');

});
server.on('error', error=>console.log(`Error en el servidor ${error}`));