const express = require("express");
var router = express.Router();
const neo4j = require("neo4j-driver");
const cache = require("./cache");

const driver = neo4j.driver(
    process.env.NEO4J_URI || "neo4j://localhost:7687",
    neo4j.auth.basic("neo4j", "neo4j")
);

//* Seccion posts
/*
!Descripcion: Todos los pedidos de compra de un proveedor en particular son 
!transferidos a otro proveedor por un cambio de contrato.
*/

router.route('/q14').post(async (req, res )=>{
    const {nombrOldProveedor,nombreNewProveedor} = req.body;
    const Q14 = `MATCH (e:Empresa)-[pd:PEDIDO_DE_COMPRA]->(oldProvider:Proveedores {nombre: $nombrOldProveedor}) 
    MATCH (newProvider:Proveedores {nombre: $nombreNewProveedor}) 
    CREATE (e)-[newPd:PEDIDO_DE_COMPRA {
    id_compra: pd.id_compra,
    nombre_producto: pd.nombre_producto,
    cantidad: pd.cantidad,
    precio_unitario: pd.precio_unitario,
    precio_total: pd.precio_total,
    fecha_pedido: pd.fecha_pedido,
    fecha_recepcion: pd.fecha_recepcion,
    id_proveedor: newProvider.ID
    }]->(newProvider) DELETE pd RETURN e, oldProvider, newProvider`;
    req.queryLog = Q14;
    const session = driver.session();
    try {
        const result = await session.run(Q14, {nombrOldProveedor ,nombreNewProveedor});
        const proveedor = result.records.map(record => record.get('newProvider').properties);
        res.data=proveedor;
        res.json({proveedores :  proveedor});
    } catch (error) {
        console.error("Error al cambiar el pedido de compra:", error);
        res.status(500).json({ error: "Error al cambiar el pedido de compra" });
    }  finally {
        await session.close();
    }

});

module.exports = router;