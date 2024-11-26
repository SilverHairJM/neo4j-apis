const express = require("express");
var router = express.Router();
const neo4j = require("neo4j-driver");
const cache = require("./cache");

const driver = neo4j.driver(
    process.env.NEO4J_URI || "neo4j://localhost:7687",
    neo4j.auth.basic("neo4j", "neo4j")
);

//! Q1 Descripcion: Obtener la lista de productos que tienen menos de 10 unidades en stock.

router.route('/q1').get(async (req, res)=>{
    const Q1 = 'MATCH (p:Productos) WHERE p.stock <=10 return p.nombre AS Nombre_Producto,p.stock AS Stock';
    req.queryLog = Q1;
    const session = driver.session();
    try {
        const result = await session.run(Q1);
        const productos = result.records.map(record => {
            return {
                Nombre: record.get('Nombre_Producto'),
                Stokc: record.get('Stock')
            };
        });
        res.data=productos;
        res.json({ Productos: productos });
    } catch (error) {
        console.error("Error al obtener los Productos:", error);
        res.status(500).json({ error: "Error al obtener los Productos" });
    } finally {
        await session.close();
    }

});


//! Q4. Descripcion: Encontrar los productos que han sido comprados por más de 5 clientes diferentes.
router.route('/q4').get(async (req,res)=>{
    const Q4 = `MATCH (e:Empresa)-[pv:PEDIDO_DE_VENTA]->(c:Cliente)
                UNWIND pv.productos AS producto_solicitado
                MATCH (e)-[:INVENTARIO]->(p:Productos {nombre: producto_solicitado})
                WITH p, COUNT(DISTINCT c) AS total_clientes, COLLECT(DISTINCT c.nombre) AS nombres_clientes
                WHERE total_clientes >= 5
                RETURN p.nombre AS producto, total_clientes, nombres_clientes`;
    req.queryLog = Q4;
    const session = driver.session();
    try {
        const result = await  session.run(Q4);
        const productos = result.records.map(record=>{
            return{
                Producto: record.get('producto'),
                Total_Clientes: record.get('total_clientes'),
                Nombres_Clientes: record.get('nombres_clientes')
            };
        });
        res.data=productos;
        res.json({Productos : productos});
    } catch (error) {
        console.error("Error al obtener los Productos:", error);
        res.status(500).json({ error: "Error al obtener los Productos" });
    } finally {
        await session.close();
    }

});

//* Seccion de Post
//! Q13. Descripcion: Todos los productos de una categoría específica eliminados del inventario.
router.route('/q13').post(async (req, res) => {
    const  { categoria } = req.body;
    const Q13 = `MATCH (e:Empresa)-[r:INVENTARIO]->(p:Productos {categoria: $categoria}) DETACH DELETE p`;
    req.queryLog = Q13;
    const session = driver.session();
    try {
        await session.run(Q13, { categoria });
        res.data=({ mensaje: "Productos eliminados correctamente" });
        res.json(res.data);
    } catch (error) {
        console.error("Error al eliminar a los Productos:", error);
        res.status(500).json({ error: "Error al eliminar a los Productos" });
    } finally {
        await session.close();
    }

});

module.exports = router;