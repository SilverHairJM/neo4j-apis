const express = require('express');
const app = express();
const neo4j = require("neo4j-driver");
const bodyParser = require('body-parser');
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('<h1>Laboratorio Neo4J - Backend</h1><p>Esta es la página de inicio.</p>');
});

const rutaProveedoores = require('./rutas/rutasProveedores');
const rutaProductos = require('./rutas/rutasProductos');
const rutaClientes = require('./rutas/rutasClientes');
const rutasPedidosVentas = require('./rutas/rutasPedidosVentas');
const rutasPedidosCompras =  require('./rutas/rutasPedidosCompras');
const logger = require('./rutas/logger');


app.use(logger);
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use('/api', rutaClientes,rutaProductos,rutaProveedoores,rutasPedidosVentas,rutasPedidosCompras);

app.listen(PORT, () => { console.log('Server en http://localhost:' + PORT) });