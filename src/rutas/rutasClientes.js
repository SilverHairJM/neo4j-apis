const express = require("express");
var router = express.Router();
const neo4j = require("neo4j-driver");
const cache = require("./cache");

const driver = neo4j.driver(
  process.env.NEO4J_URI || "neo4j://localhost:7687",
  neo4j.auth.basic("neo4j", "neo4j")
);

//* Parte dedicada a los GETs
//! Q11. Descripcion: Obtener la lista de clientes.
router.route('/q11').get(async (req, res)=>{
    const Q11 = 'MATCH (c:Cliente) return c.nombre AS Nombre_Cliente';
    req.queryLog = Q11;
    const session = driver.session();
    try {
        const result = await session.run(Q11);
        const clientes = result.records.map(record => {
            return record.get('Nombre_Cliente');
        });
        res.data=clientes;
        res.json({ Cliente: clientes });
    } catch (error) {
        console.error("Error al obtener clientes:", error);
        res.status(500).json({ error: "Error al obtener clientes" });
    } finally {
        await session.close();
    }
});

//*Parte dedicada a los POSTs
//! Q15. Descripcion: Eliminar todos los clientes que han realizado devoluciones.
router.route('/q15').post(async (req, res)=>{
    const Q15 = `MATCH (c:Cliente)-[d:DEVOLUCION]->(e:Empresa) DETACH DELETE c`;
    req.queryLog = Q15;
    const session = driver.session();
    try {
        await session.run(Q15);
        res.data = ({ mensaje: "Clientes con devoluciones eliminados correctamente" });
        res.json(res.data);
    } catch (error) {
        console.error("Error al eliminar a los Clientes:", error);
        res.status(500).json({ error: "Error al eliminar a los Clientes" });
    }finally {
        await session.close();
    }
    

});

module.exports = router;