const express = require("express");
var router = express.Router();
const neo4j = require("neo4j-driver");
const cache = require("./cache");

const driver = neo4j.driver(
    process.env.NEO4J_URI || "neo4j://localhost:7687",
    neo4j.auth.basic("neo4j", "neo4j")
);

//*Sección dedidcada a los GETs
//! Q2. Descripción: Encontrar los proveedores que suministran productos de una categoría específica.

router.route('/q2').post(async (req, res) => {
    const { categoria } = req.body;  // Obtener la categoría del cuerpo de la solicitud

    const Q2 = `
        MATCH (pr:Proveedores)
        MATCH (p:Productos)
        WHERE pr.ID = p.id_proveedor AND p.categoria = $categoria
        RETURN pr, p
    `;
    req.queryLog = Q2;
    const session = driver.session();
    try {
        const result = await session.run(Q2, { categoria });
        const proveedores = result.records.map(record => ({
            proveedor: record.get('pr').properties,
            producto: record.get('p').properties
        }));
        res.data=proveedores;
        res.json({ Proveedores: proveedores });
    } catch (error) {
        console.error("Error al obtener proveedores:", error);
        res.status(500).json({ error: "Error al obtener proveedores" });
    } finally {
        await session.close();
    }
});

//! Q5. Descripcion: Obtener la lista de todos los proveedores.

router.route('/q5').get(async (req, res)=>{
    const Q5 = 'MATCH (p:Proveedores) return p.nombre AS nombre_proveedor;';
    req.queryLog = Q5;
    const session = driver.session();
    try {
        const result = await session.run(Q5);
        const proveedor = result.records.map(record => {
            return record.get('nombre_proveedor');
        });
        res.data=proveedor;
        res.json({ Proveedores : proveedor });
    } catch (error) {
        console.error("Error al obtener proveedores:", error);
        res.status(500).json({ error: "Error al obtener proveedores" });
    } finally {
        await session.close();
    }
});

//*Sección dedicada a los POSTs.
//! Q8. Descripcion: Cambiar todos los productos suministrados por un proveedor a otro proveedor.
router.route('/q8').post(async (req, res)=>{
    const  { oldProveedor, newProveedor } = req.body;
    const Q8 = `MATCH (p:Productos {id_proveedor: $oldProveedor}) 
                SET p.id_proveedor = $newProveedor RETURN p`;
    req.queryLog = Q8;
    const session = driver.session();

    try {
        const result = await session.run(Q8, {oldProveedor , newProveedor});
        const proveedor = result.records.map(record=>{
            return record.get('p').properties;
        });
        res.data=proveedor;
        res.json({Productos :  proveedor});
    } catch (error) {
        console.error("Error al cambiar  proveedor:", error);
        res.status(500).json({ error: "Error al cambiar proveedor" });
    } finally {
        session.close();
    }
});

//! Q12. Descripcion: Eliminar todos los proveedores y sus nodos asociados.
router.route('/q12').post(async (req, res) => {
    const Q12 = `MATCH (p:Proveedores) DETACH DELETE p`;
    req.queryLog = Q12;
    const session = driver.session();
    try {
        await session.run(Q12);
        res.data = { mensaje: "Proveedores eliminados correctamente" };
        res.json(res.data);
    } catch (error) {
        console.error("Error al eliminar a los Proveedores:", error);
        res.status(500).json({ error: "Error al eliminar a los Proveedores" });
    } finally {
        session.close();
    }
});

module.exports = router;
