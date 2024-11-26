const express = require("express");
var router = express.Router();
const neo4j = require("neo4j-driver");
const cache = require("./cache");

const driver = neo4j.driver(
    process.env.NEO4J_URI || "neo4j://localhost:7687",
    neo4j.auth.basic("neo4j", "neo4j")
);

//! Q7. Descripcion: Listar los pedidos de venta que tienen un valor total mayor a $10,000.

router.route('/q7').get(async (req, res) =>{
    const Q7 = `MATCH (e:Empresa)-[pd:PEDIDO_DE_VENTA]->(c:Cliente)
    WHERE pd.precio_venta >= 10000
    RETURN e.nombre AS Empresa, c.nombre AS Nombre_Cliente, 
    pd.productos AS Productos, pd.precio_venta AS Total`;
    req.queryLog = Q7;
    const session = driver.session();
    try {
        const result = await  session.run(Q7);
        const pedidosVenta = result.records.map(record=>{
            return {
                Empresa: record.get('Empresa'),
                Nombre_Cliente: record.get('Nombre_Cliente'),
                Productos: record.get('Productos'),
                Total: record.get('Total')
            };
        });
        res.data=pedidosVenta;
        res.json({PEDIDO_DE_VENTA :  pedidosVenta});
    } catch (error) {
        console.error("Error al obtener los Pedidos de Venta", error);
        res.status(500).json({ error: "Error al obtener los Pedidos de Venta" });
    } finally {
        await session.close();
    }
});

module.exports = router;