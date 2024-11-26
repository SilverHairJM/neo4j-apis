# Introducción

En este archivo se localizaran los scrips que se deberan de ejecutar dentro de Neo4j, para crear el escenario de datos.

## Contenido

- [Introducción](#introducción)
  - [Contenido](#contenido)
    - [Escenario de Datos](#escenario-de-datos)
      - [Nodos](#nodos)
        - [Empresa](#empresa)
        - [Proveedores](#proveedores)
        - [Productos](#productos)
        - [Clientes](#clientes)
      - [Enlaces](#enlaces)
        - [Inventario](#inventario)
        - [Pedidos de Compra](#pedidos-de-compra)
        - [Pedidos de Venta](#pedidos-de-venta)
        - [Devoluciones](#devoluciones)
    - [Querys](#querys)
      - [Q00](#q00)
      - [Q01](#q01)
      - [Q02](#q02)
      - [Q03](#q03)
      - [Q04](#q04)
      - [Q05](#q05)
      - [Q06](#q06)
      - [Q07](#q07)
      - [Q08](#q08)
      - [Q09](#q09)
      - [Q10](#q10)
      - [Q11](#q11)
      - [Q12](#q12)
      - [Q13](#q13)
      - [Q14](#q14)
      - [Q15](#q15)
    - [Postman](#postman)
      - [Endpoints](#endpoints)
        - [Gets](#gets)
          - [Consulta - Q1](#consulta---q1)
          - [Consulta - Q2](#consulta---q2)
          - [Consulta - Q4](#consulta---q4)
          - [Consulta - Q5](#consulta---q5)
          - [Consulta - Q7](#consulta---q7)
          - [Consulta - Q11](#consulta---q11)
        - [Posts](#posts)
          - [Consulta - Q8](#consulta---q8)
          - [Consulta - Q12](#consulta---q12)
          - [Consulta - Q13](#consulta---q13)
          - [Consulta - Q14](#consulta---q14)
          - [Consulta - Q15](#consulta---q15)
    - [JSON de la colección de datos](#json-de-la-colección-de-datos)
    - [BackEnd](#backend)
      - [Archivos de las Rutas](#archivos-de-las-rutas)
        - [rutasClientes.js](#rutasclientesjs)
        - [rutasPedidosCompras.js](#rutaspedidoscomprasjs)
        - [rutasPedidosVentas.js](#rutaspedidosventasjs)
        - [rutasProductos.js](#rutasproductosjs)
        - [rutasProveedores.js](#rutasproveedoresjs)
      - [Archivos logger y server](#archivos-logger-y-server)
        - [logger.js](#loggerjs)
        - [server.js](#serverjs)
    - [Cómo Ejecutar la API](#cómo-ejecutar-la-api)
    - [Cómo Ejecutar Desde un Docker Compose](#cómo-ejecutar-desde-un-docker-compose)

### Escenario de Datos

#### Nodos

##### Empresa

Este es un nodo que funciona como enlace, entre los demas nodos cuando se hagan los demas enlaces
pertinentes

```bash
CREATE (e:Empresa {nombre:"Handtech"})
return e;
```

##### Proveedores

```bash
CREATE
(p1:Proveedores {ID: 1, nombre: "ElectroTech Solutions", Pais_de_origen: "México", Telefono: "+52 55 1234 5678", correo: "contacto@electrotech.com"}),
(p2:Proveedores {ID: 2, nombre: "Digital World Corp", Pais_de_origen: "Estados Unidos", Telefono: "+1 415 987 6543", correo: "ventas@digitalworld.com"}),
(p3:Proveedores {ID: 3, nombre: "Premium Gadgets SA", Pais_de_origen: "España", Telefono: "+34 91 456 7890", correo: "info@premiumgadgets.com"}),
(p4:Proveedores {ID: 4, nombre: "Innovación Global", Pais_de_origen: "México", Telefono: "+52 81 2345 6789", correo: "innovacion@global.com"}),
(p5:Proveedores {ID: 5, nombre: "TecnoHogar Ltd.", Pais_de_origen: "Canadá", Telefono: "+1 613 456 7890", correo: "soporte@tecnohogar.ca"}),
(p6:Proveedores {ID: 6, nombre: "Future Vision Electronics", Pais_de_origen: "Alemania", Telefono: "+49 30 1234 5678", correo: "sales@futurevision.de"}),
(p7:Proveedores {ID: 7, nombre: "SmartHome Global", Pais_de_origen: "México", Telefono: "+52 33 9876 5432", correo: "atencion@smarthome.mx"}),
(p8:Proveedores {ID: 8, nombre: "Innovatek Inc.", Pais_de_origen: "Japón", Telefono: "+81 3 1234 5678", correo: "contacto@innovatek.jp"}),
(p9:Proveedores {ID: 9, nombre: "Bright Screens Ltd.", Pais_de_origen: "Reino Unido", Telefono: "+44 20 1234 5678", correo: "ventas@brightscreens.co.uk"}),
(p10:Proveedores {ID: 10, nombre: "Digital Luxury Goods", Pais_de_origen: "Francia", Telefono: "+33 1 2345 6789", correo: "info@digitalluxury.fr"});
```

##### Productos

```bash
CREATE
(prod1:Productos {codigo: 401, nombre: "Laptop Premium Ultra", descripcion: "Laptop de alto rendimiento con procesador Intel i9, 32GB RAM, 1TB SSD", precio: 45000, stock: 15, categoria: "Laptops", id_proveedor: 1}),
(prod2:Productos {codigo: 402, nombre: "Televisor OLED 4K 65", descripcion: "Televisor OLED con resolución 4K, 65 pulgadas y HDR10+", precio: 35000, stock: 10, categoria: "Televisores", id_proveedor: 2}),
(prod3:Productos {codigo: 403, nombre: "Laptop Creativa Pro", descripcion: "Laptop para diseño y creación de contenido con tarjeta gráfica dedicada, 16GB RAM, pantalla 4K", precio: 30000, stock: 20, categoria: "Laptops", id_proveedor: 3}),
(prod4:Productos {codigo: 404, nombre: "Smart TV QLED 75", descripcion: "Televisor QLED de 75 pulgadas con resolución 8K y sonido envolvente", precio: 50000, stock: 8, categoria: "Televisores", id_proveedor: 4}),
(prod5:Productos {codigo: 405, nombre: "Ultrabook Empresarial", descripcion: "Ultrabook de uso empresarial con pantalla táctil, 16GB RAM, 512GB SSD", precio: 22000, stock: 30, categoria: "Laptops", id_proveedor: 5}),
(prod6:Productos {codigo: 406, nombre: "Pantalla Curva UltraWide 49", descripcion: "Monitor ultra ancho de 49 pulgadas para experiencia inmersiva, ideal para gamers", precio: 21000, stock: 25, categoria: "Monitores", id_proveedor: 6}),
(prod7:Productos {codigo: 407, nombre: "Laptop Gamer Nitro", descripcion: "Laptop gamer con RTX 3080, 32GB RAM, 1TB SSD", precio: 42000, stock: 12, categoria: "Laptops", id_proveedor: 7}),
(prod8:Productos {codigo: 408, nombre: "TV 4K UHD 70", descripcion: "Televisor 4K de 70 pulgadas con tecnología de inteligencia artificial", precio: 27000, stock: 18, categoria: "Televisores", id_proveedor: 8}),
(prod9:Productos {codigo: 409, nombre: "All-in-One 27 4K", descripcion: "PC todo-en-uno con pantalla táctil de 27 pulgadas y resolución 4K", precio: 15000, stock: 30, categoria: "Computadoras", id_proveedor: 9}),
(prod10:Productos {codigo: 410, nombre: "Televisor Smart UHD 8K 85", descripcion: "Televisor UHD 8K de 85 pulgadas, ideal para grandes espacios", precio: 60000, stock: 5, categoria: "Televisores", id_proveedor: 10}), 
(prod11:Productos {codigo: 411, nombre: "SSD 1TB NVMe", descripcion: "Disco duro sólido NVMe de 1TB, velocidad de lectura 3500 MB/s", precio: 3000, stock: 50, categoria: "Almacenamiento", id_proveedor: 1}),
(prod12:Productos {codigo: 412, nombre: "Mouse Gaming RGB", descripcion: "Mouse gaming con retroiluminación RGB y 16000 DPI", precio: 900, stock: 100, categoria: "Periféricos", id_proveedor: 2}),
(prod13:Productos {codigo: 413, nombre: "Teclado Mecánico", descripcion: "Teclado mecánico con retroiluminación y switches mecánicos", precio: 1500, stock: 60, categoria: "Periféricos", id_proveedor: 3}),
(prod14:Productos {codigo: 414, nombre: "Mousepad Gaming XXL", descripcion: "Mousepad grande para gamers con superficie textil", precio: 500, stock: 80, categoria: "Periféricos", id_proveedor: 4}),
(prod15:Productos {codigo: 415, nombre: "Auriculares Inalámbricos", descripcion: "Auriculares Bluetooth con cancelación de ruido", precio: 2500, stock: 40, categoria: "Audio", id_proveedor: 5}),
(prod16:Productos {codigo: 416, nombre: "Monitor 24 Full HD", descripcion: "Monitor LED de 24 pulgadas con resolución Full HD", precio: 4000, stock: 30, categoria: "Monitores", id_proveedor: 6}),
(prod17:Productos {codigo: 417, nombre: "Adaptador USB-C a HDMI", descripcion: "Adaptador para conectar dispositivos USB-C a HDMI", precio: 700, stock: 70, categoria: "Accesorios", id_proveedor: 7}),
(prod18:Productos {codigo: 418, nombre: "Cámara Web HD", descripcion: "Cámara web con resolución HD 1080p y micrófono incorporado", precio: 1200, stock: 50, categoria: "Periféricos", id_proveedor: 8}),
(prod19:Productos {codigo: 419, nombre: "Hub USB 3.0", descripcion: "Hub USB de 4 puertos, permite conectar múltiples dispositivos", precio: 600, stock: 90, categoria: "Accesorios", id_proveedor: 9}),
(prod20:Productos {codigo: 420, nombre: "Altavoces Bluetooth", descripcion: "Altavoces portátiles Bluetooth con sonido estéreo", precio: 2000, stock: 35, categoria: "Audio", id_proveedor: 10}),
(prod21:Productos {codigo: 421, nombre: "Laptop Premium Ultra", descripcion: "Laptop de alto rendimiento con procesador Intel i9, 32GB RAM, 1TB SSD", precio: 45000, stock: 0, categoria: "Laptops", id_proveedor: 1}),
(prod22:Productos {codigo: 422, nombre: "Smart TV OLED 55", descripcion: "Televisor OLED de 55 pulgadas con resolución 4K y HDR", precio: 32000, stock: 0, categoria: "Televisores", id_proveedor: 2}),
(prod23:Productos {codigo: 423, nombre: "Smartphone Pro Max", descripcion: "Smartphone de última generación con cámara de 108 MP y 256GB de almacenamiento", precio: 28000, stock: 0, categoria: "Smartphones", id_proveedor: 3}),
(prod24:Productos {codigo: 424, nombre: "Tableta Avanzada X", descripcion: "Tableta con pantalla de 12 pulgadas, 128GB de almacenamiento y procesador de alto rendimiento", precio: 18000, stock: 0, categoria: "Tabletas", id_proveedor: 4}),
(prod25:Productos {codigo: 425, nombre: "Monitor Curvo 34", descripcion: "Monitor curvo de 34 pulgadas con resolución UltraWide y frecuencia de actualización de 144Hz", precio: 22000, stock: 0, categoria: "Monitores", id_proveedor: 5});
```

##### Clientes

```bash
CREATE
(c1:Cliente {ID: 1, nombre: "Juan Pérez", direccion: "Calle Falsa 123", ciudad: "México D.F.", teléfono: "+52 55 1234 5678", correo_electronico: "juan.perez@email.com"}),
(c2:Cliente {ID: 2, nombre: "María López", direccion: "Av. Reforma 456", ciudad: "Guadalajara", teléfono: "+52 33 9876 5432", correo_electronico: "maria.lopez@email.com"}),
(c3:Cliente {ID: 3, nombre: "Compañía XYZ", direccion: "Paseo de la Reforma 789", ciudad: "Monterrey", teléfono: "+52 81 2345 6789", correo_electronico: "contacto@companiaxyz.com"}),
(c4:Cliente {ID: 4, nombre: "Carlos Martínez", direccion: "Calle 123", ciudad: "Puebla", teléfono: "+52 22 3456 7890", correo_electronico: "carlos.martinez@email.com"}),
(c5:Cliente {ID: 5, nombre: "Sofía Ramírez", direccion: "Calle 456", ciudad: "Tijuana", teléfono: "+52 66 1234 5678", correo_electronico: "sofia.ramirez@email.com"}),
(c6:Cliente {ID: 6, nombre: "Grupo Tech Solutions", direccion: "Blvd. Adolfo López Mateos 321", ciudad: "Querétaro", teléfono: "+52 44 5678 1234", correo_electronico: "info@grupotech.com"}),
(c7:Cliente {ID: 7, nombre: "Andrés González", direccion: "Calle 789", ciudad: "Cancún", teléfono: "+52 98 7654 3210", correo_electronico: "andres.gonzalez@email.com"}),
(c8:Cliente {ID: 8, nombre: "Innovaciones 360", direccion: "Calle Innovación 101", ciudad: "Ciudad de México", teléfono: "+52 55 6789 1234", correo_electronico: "ventas@innovaciones360.com"}),
(c9:Cliente {ID: 9, nombre: "Laura Fernández", direccion: "Calle 222", ciudad: "León", teléfono: "+52 477 1234 5678", correo_electronico: "laura.fernandez@email.com"}),
(c10:Cliente {ID: 10, nombre: "Servicios Integrales SA", direccion: "Calle Empresarial 333", ciudad: "Toluca", teléfono: "+52 72 1234 5678", correo_electronico: "contacto@serviciosintegrales.com"}),
(c11:Cliente {ID: 11, nombre: "Ana García", direccion: "Calle 45", ciudad: "Monterrey", telefono: 5559876543, correo_electronico: "ana.garcia@example.com"}),
(c12:Cliente {ID: 12, nombre: "Luis Martínez", direccion: "Paseo de la Reforma 89", ciudad: "Guadalajara", telefono: 5556543210, correo_electronico: "luis.martinez@example.com"}),
(c13:Cliente {ID: 13, nombre: "Sofía López", direccion: "Calle Juárez 34", ciudad: "Tijuana", telefono: 5553219876, correo_electronico: "sofia.lopez@example.com"}),
(c14:Cliente {ID: 14, nombre: "Fernando Rodríguez", direccion: "Blvd. Juárez 56", ciudad: "Cancún", telefono: 5557890123, correo_electronico: "fernando.rodriguez@example.com"});

```

#### Enlaces

##### Inventario

```bash
MATCH (e:Empresa)
MATCH (p:Productos)
MERGE (e)-[:INVENTARIO]->(p)
return e,p;
```

##### Pedidos de Compra

```bash
MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "ElectroTech Solutions"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 201,
  nombre_producto: "Laptop Premium Ultra", 
  cantidad: 2, 
  precio_unitario: 45000,
  precio_total: 90000,
  fecha_pedido: "13-04-2024", 
  fecha_recepcion: "23-04-2024",
  id_proveedor: 1
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "ElectroTech Solutions"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 202,  
  nombre_producto: "SSD 1TB NVMe", 
  cantidad: 5, 
  precio_unitario: 3000,
  precio_total: 15000,
  fecha_pedido: "10-05-2024", 
  fecha_recepcion: "20-05-2024",
  id_proveedor: 1
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Digital World Corp"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 203,
  nombre_producto: "Mouse Gaming RGB", 
  cantidad: 10, 
  precio_unitario: 900,
  precio_total: 9000,
  fecha_pedido: "15-04-2024", 
  fecha_recepcion: "26-04-2024",
  id_proveedor: 2
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Digital World Corp"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 204,
  nombre_producto: "Televisor OLED 4K 65", 
  cantidad: 1,
  precio_unitario: 3000,
  precio_total: 35000,
  fecha_pedido: "10-05-2024", 
  fecha_recepcion: "20-05-2024",
  id_proveedor: 2
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Premium Gadgets SA"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 205,
  nombre_producto: "Teclado mecanico", 
  cantidad: 5, 
  precio_unitario: 1500,
  precio_total: 7500,
  fecha_pedido: "26-10-2024", 
  fecha_recepcion: "30-10-2024",
  id_proveedor: 3
  }]->(pr)
return e,pr;


MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Premium Gadgets SA"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 206,
  nombre_producto: "Laptop Creativa Pro", 
  cantidad: 1, 
  precio_unitario: 30000,
  precio_total: 30000,
  fecha_pedido: "26-09-2024", 
  fecha_recepcion: "03-10-2024",
  id_proveedor: 3
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Innovación Global"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 207,
  nombre_producto: "Smart TV QLED 75", 
  cantidad: 2, 
  precio_unitario: 50000,
  precio_total: 100000,
  fecha_pedido: "15-02-2024", 
  fecha_recepcion: "20-02-2024",
  id_proveedor: 4
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Innovación Global"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 208,
  nombre_producto: "Mousepad Gaming XXL", 
  cantidad: 20, 
  precio_unitario: 500,
  precio_total: 10000,
  fecha_pedido: "17-01-2024", 
  fecha_recepcion: "22-01-2024",
  id_proveedor: 4
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "TecnoHogar Ltd."})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 209,
  nombre_producto: "Ultrabook Empresarial", 
  cantidad: 2, 
  precio_unitario: 22000,
  precio_total: 44000,
  fecha_pedido: "10-06-2024", 
  fecha_recepcion: "25-06-2024",
  id_proveedor: 5
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "TecnoHogar Ltd."})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 210,
  nombre_producto: "Auriculares Inalámbricos", 
  cantidad: 5, 
  precio_unitario: 2500,
  precio_total: 12500,
  fecha_pedido: "15-07-2024", 
  fecha_recepcion: "30-07-2024",
  id_proveedor: 5
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Future Vision Electronics"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 211,
  nombre_producto: "Monitor 24 Full HD", 
  cantidad: 5, 
  precio_unitario: 4000,
  precio_total: 20000,
  fecha_pedido: "22-02-2024", 
  fecha_recepcion: "10-02-2024",
  id_proveedor: 6
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Future Vision Electronics"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 212,
  nombre_producto: "Pantalla Curva UltraWide 49", 
  cantidad: 5, 
  precio_unitario: 21000,
  precio_total: 105000,
  fecha_pedido: "10-02-2024", 
  fecha_recepcion: "22-02-2024",
  id_proveedor: 6
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "SmartHome Global"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 213,
  nombre_producto: "Adaptador USB-C a HDMI", 
  cantidad: 20, 
  precio_unitario: 700,
  precio_total: 1400,
  fecha_pedido: "26-11-2024", 
  fecha_recepcion: "30-11-2024",
  id_proveedor: 7
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "SmartHome Global"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 214,
  nombre_producto: "Laptop Gamer Nitro", 
  cantidad: 1, 
  precio_unitario: 42000,
  precio_total: 42000,
  fecha_pedido: "29-09-2024", 
  fecha_recepcion: "10-10-2024",
  id_proveedor: 7
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Innovatek Inc."})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{ 
  id_compra: 215,
  nombre_producto: "Cámara Web HD", 
  cantidad: 5, 
  precio_unitario: 1200,
  precio_total: 6000,
  fecha_pedido: "10-06-2024", 
  fecha_recepcion: "10-08-2024",
  id_proveedor: 8
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Innovatek Inc."})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{ 
  id_compra: 216,
  nombre_producto: "TV 4K UHD 70", 
  cantidad: 10, 
  precio_unitario: 27000,
  precio_total: 270000,
  fecha_pedido: "10-05-2024", 
  fecha_recepcion: "10-08-2024",
  id_proveedor: 8
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Bright Screens Ltd."})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 217,
  nombre_producto: "All-in-One 27 4K", 
  cantidad: 2, 
  precio_unitario: 15000,
  precio_total: 30000,
  fecha_pedido: "10-07-2024", 
  fecha_recepcion: "30-07-2024",
  id_proveedor: 9
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Bright Screens Ltd."})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{ 
  id_compra: 218,
  nombre_producto: "Hub USB 3.0", 
  cantidad: 20, 
  precio_unitario: 600,
  precio_total: 12000,
  fecha_pedido: "01-08-2024", 
  fecha_recepcion: "20-08-2024",
  id_proveedor: 9
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Digital Luxury Goods"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 219,
  nombre_producto: "Televisor Smart UHD 8K 85", 
  cantidad: 1, 
  precio_unitario: 60000,
  precio_total: 60000,
  fecha_pedido: "01-09-2024", 
  fecha_recepcion: "20-09-2024",
  id_proveedor: 10
  }]->(pr)
return e,pr;

MATCH (e:Empresa)
MATCH (pr:Proveedores {nombre: "Digital Luxury Goods"})
MERGE (e)-[pd:PEDIDO_DE_COMPRA{
  id_compra: 219,
  nombre_producto: "Altavoces Bluetooth", 
  cantidad: 10, 
  precio_unitario: 2000,
  precio_total: 20000,
  fecha_pedido: "05-04-2024", 
  fecha_recepcion: "05-05-2024",
  id_proveedor: 10
  }]->(pr)
return e,pr;
```

##### Pedidos de Venta

```bash
MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Laura Fernández"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 1,
  productos: ["Mousepad Gaming XXL", "Adaptador USB-C a HDMI"],
  cantidad: [1,1],
  precio_venta: 1200,
  precios_unitarios: [500, 700],
  fecha_entrega: "03-11-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Carlos Martínez"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 2,
  productos: ["Televisor OLED 4K 65"],
  cantidad: [1],
  precio_venta: 35000,
  precios_unitarios: [35000],
  fecha_entrega: "10-05-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Sofía Ramírez"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 3,
  productos: ["Mouse Gaming RGB", "Mousepad Gaming XXL"],
  cantidad: [1,1],
  precio_venta: 1400,
  precios_unitarios: [900,500],
  fecha_entrega: "12-06-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Andrés González"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 4,
  productos: ["Auriculares Inalámbricos", "Hub USB 3.0", "Altavoces Bluetooth"],
  cantidad: [1,1,1],
  precio_venta: 5100,
  precios_unitarios: [2500,600,2000],
  fecha_entrega: "25-03-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Juan Pérez"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 5,
  productos: ["Laptop Creativa Pro"],
  cantidad: [1],
  precio_venta: 30000,
  precios_unitarios: [30000],
  fecha_entrega: "28-02-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "María López"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 6,
  productos: ["Smart TV QLED 75"],
  cantidad: [1],
  precio_venta: 50000,
  precios_unitarios: [50000],
  fecha_entrega: "15-05-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Servicios Integrales SA"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 7,
  productos: ["Ultrabook Empresarial", "All-in-One 27 4K"],
  cantidad: [3,1],
  precio_venta: 81000,
  precios_unitarios: [22000,15000],
  fecha_entrega: "15-08-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Grupo Tech Solutions"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta:8,
  productos: ["Cámara Web HD", "Monitor 24 Full HD"],
  cantidad: [3,3],
  precio_venta: 15600, 
  precios_unitarios: [1200,4000],
  fecha_entrega: "02-01-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Innovaciones 360"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 9,
  productos: ["SSD 1TB NVMe", "Mouse Gaming RGB", "Mousepad Gaming XXL"],
  cantidad: [5,5,5],
  precio_venta: 22000,
  precios_unitarios: [3000,900,500],
  fecha_entrega: "08-11-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Compañía XYZ"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 10,
  productos: ["Ultrabook Empresarial", "All-in-One 27 4K", "Monitor 24 Full HD", "Cámara Web HD"],
  cantidad: [1,3,2,2],
  precio_venta: 77400,
  precios_unitarios: [22000,15000,1200,4000],
  fecha_entrega: ""
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Compañía XYZ"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 11,
  productos: ["SSD 1TB NVMe"],
  cantidad: [5],
  precio_venta: 15000,
  precios_unitarios: [3000],
  fecha_entrega: "11-11-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Luis Martínez"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 12,
  productos: ["Mousepad Gaming XXL", "Teclado Mecánico"],
  cantidad: [1,1],
  precio_venta: 2000,
  precios_unitarios: [500,1500],
  fecha_entrega: "26-06-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Ana García"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 13,
  productos: ["SSD 1TB NVMe", "Mousepad Gaming XXL", "Mouse Gaming RGB"],
  cantidad: [1,1,1],
  precio_venta: 4400,
  precios_unitarios: [3000,500,900],
  fecha_entrega: "30-01-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Sofía López"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 14,
  productos: ["Monitor 24 Full HD"],
  cantidad: [1],
  precio_venta: 4000,
  precios_unitarios: [4000],
  fecha_entrega: "27-07-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Fernando Rodríguez"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 15,
  productos: ["Mouse Gaming RGB"],
  cantidad: [1],
  precio_venta: 900,
  precios_unitarios: [900],
  fecha_entrega: "25-08-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Grupo Tech Solutions"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 16,
  productos: ["Mouse Gaming RGB", "Monitor 24 Full HD"],
  cantidad: [3,3],
  precio_venta: 6700, 
  precios_unitarios: [2700,4000],
  fecha_entrega: "23-11-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Carlos Martínez"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 17,
  productos: ["Mouse Gaming RGB", "Monitor 24 Full HD"],
  cantidad: [1,1],
  precio_venta: 4900,
  precios_unitarios: [900,4000],
  fecha_entrega: "10-05-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Juan Pérez"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 18,
  productos: ["Mouse Gaming RGB"],
  cantidad: [1],
  precio_venta: 900,
  precios_unitarios: [900],
  fecha_entrega: "28-02-2024"
  }]->(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "María López"})
MERGE (e)-[pc:PEDIDO_DE_VENTA{
  id_venta: 19,
  productos: ["Monitor 24 Full HD"],
  cantidad: [1],
  precio_venta: 4000,
  precios_unitarios: [4000],
  fecha_entrega: "15-05-2024"
  }]->(c)
return e,c;

```

##### Devoluciones

```bash
MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Laura Fernández"})
MERGE (e)<-[d:DEVOLUCION{
  id_devolucion: 1,
  id_venta: 1,
  producto_devuelto: "Adaptador USB-C a HDMI",
  fecha_devolucion: "05-11-2024",
  motivos_devolucion: "El adaptaddor USB-C a HDMI no funciono",
  reembolso: "Si",
  cantidad_reembolso: 700
  }]-(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Grupo Tech Solutions"})
MERGE (e)<-[d:DEVOLUCION{
  id_devolucion: 2,
  id_venta: 8,
  producto_devuelto: "Cámara Web HD",
  fecha_devolucion: "05-01-2024",
  motivos_devolucion: "una de las camaras no encendio",
  reembolso: "Si",
  cantidad_reembolso: 1200
  }]-(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Sofía Ramírez"})
MERGE (e)<-[d:DEVOLUCION{
  id_devolucion: 3,
  id_venta: 3,
  producto_devuelto: "Mousepad Gaming XXL",
  fecha_devolucion: "05-11-2024",
  motivos_devolucion: "Se rompio mientras lo sacaba del empaque",
  reembolso: "No",
  cantidad_reembolso: 0
  }]-(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Luis Martínez"})
MERGE (e)<-[d:DEVOLUCION{
  id_devolucion: 4,
  id_venta: 12,
  producto_devuelto: "Teclado Mecánico",
  fecha_devolucion: "02-07-2024",
  motivos_devolucion: "No funciono la retroiluminación del teclado",
  reembolso: "Si",
  cantidad_reembolso: 1500
  }]-(c)
return e,c;

MATCH (e:Empresa)
MATCH (c:Cliente {nombre: "Sofía López"})
MERGE (e)<-[d:DEVOLUCION{
  id_devolucion: 5,
  id_venta: 14,
  producto_devuelto: "Monitor 24 Full HD",
  fecha_devolucion: "05-08-2024",
  motivos_devolucion: "El monitor llego con el display dañado",
  reembolso: "Si",
  cantidad_reembolso: 4000
  }]-(c)
return e,c;

```

### Querys

En este apartado se localizan las Querys o consultan que dan solución algunas problematicas del escenario de datos.

#### Q00

Esta query funciona para eliminar todo el escenario de datos, es decir
borra todos los nodos contenidos dentro de Neo4j.

```bash
MATCH (n) DETACH DELETE n
```

#### Q01

Descripcion: Obtener la lista de productos que tienen menos de 10 unidades en stock.

```bash
MATCH (p:Productos)
WHERE p.stock <=10
return p.nombre AS Nombre_Producto,p.stock AS Stock;
```

#### Q02

Descripcion: Encontrar los proveedores que suministran productos de una categoría en específico.

```bash
MATCH (pr:Proveedores)
MATCH (p:Productos)
WHERE pr.ID = p.id_proveedor AND p.categoria = "Televisores"
return pr, p;
```

#### Q03

Descripcion: Obtener la lista de pedidos de compra que fueron realizados a un proveedor en específico.

```bash
MATCH (e:Empresa)
MATCH (p:Proveedores)
MATCH (e:Empresa)-[pd:PEDIDO_DE_COMPRA]->(p:Proveedores {ID: 1})
RETURN e.nombre AS Empresa, p.nombre AS Proveedor, 
pd.nombre_producto AS Producto, pd.cantidad AS Cantidad, 
pd.fecha_recepcion AS Fecha_Pedido;
```

#### Q04

Descripcion: Encontrar los productos que han sido comprados por más de 5 clientes diferentes.

```bash
MATCH (e:Empresa)-[pv:PEDIDO_DE_VENTA]->(c:Cliente)
UNWIND pv.productos AS producto_solicitado
MATCH (e)-[:INVENTARIO]->(p:Productos {nombre: producto_solicitado})
WITH p, COUNT(DISTINCT c) AS total_clientes, COLLECT(DISTINCT c.nombre) AS nombres_clientes
WHERE total_clientes >= 5
RETURN p.nombre AS producto, total_clientes, nombres_clientes;
```

#### Q05

Descripcion: Obtener la lista de todos los  proveedores.

```bash
MATCH (p:Proveedores)
return p.nombre AS nombre_proveedor;
```

#### Q06

Descripcion: Encontrar los pedidos de venta que tienen una devolución

```bash
MATCH (e:Empresa)-[pv:PEDIDO_DE_VENTA]->(c:Cliente)
MATCH (c)-[d:DEVOLUCION]->(e)
WHERE pv.id_venta = d.id_venta
RETURN e AS empresa, pv AS pedido_con_devolucion, d AS detalles_devolucion, c AS cliente
```

#### Q07

Descripcion: Listar los pedidos de venta que tienen un valor total mayor a $10,000.

```bash
MATCH (e:Empresa)-[pd:PEDIDO_DE_VENTA]->(c:Cliente)
WHERE pd.precio_venta >= 10000
RETURN e.nombre AS Empresa, c.nombre AS Nombre_Cliente, 
pd.productos AS Productos, pd.precio_venta AS Total;
```

#### Q08

Descripcion: Cambiar todos los productos suministrados por un proveedor a otro proveedor.

```bash
MATCH (p:Productos {id_proveedor: 1})
SET p.id_proveedor = 2
RETURN p;
```

#### Q09

Descripcion: Obtener la lista de proveedores que han recibido pedidos de compra por más de $50,000 en total.

```bash
MATCH (e)-[pc:PEDIDO_DE_COMPRA]->(p:Proveedores)
WHERE pc.precio_total > 50000
return e.nombre AS Empresa,p.nombre AS Proveedor,
pc.nombre_producto AS Productos,
pc.cantidad AS Cantidad,pc.precio_total AS TOTAL;
```

#### Q10

Descripcion: Encontrar los productos que se encuentran agotados (sin stock) en el inventario.

```bash
MATCH (p:Productos)
WHERE  p.stock = 0
return p;
```

#### Q11

Descripcion: Obtener la lista de clientes.

```bash
MATCH (c:Cliente)
return c.nombre AS Nombre_Cliente;
```

#### Q12

Descripcion: Eliminar todos los proveedores y sus nodos asociados.

```bash
MATCH (p:Proveedores)
DETACH DELETE p;
```

#### Q13

Descripcion: Todos los productos de una categoría específica eliminados del inventario.

```bash
MATCH (e:Empresa)-[r:INVENTARIO]->(p:Productos {categoria: "Laptops"})
DETACH DELETE p;
```

#### Q14

Descripcion: Todos los pedidos de compra de un proveedor en particular son transferidos a otro proveedor por un cambio de contrato.

```bash
MATCH (e:Empresa)-[pd:PEDIDO_DE_COMPRA]->(oldProvider:Proveedores {nombre: "TecnoHogar Ltd."})
MATCH (newProvider:Proveedores {ID: 2})
CREATE (e)-[newPd:PEDIDO_DE_COMPRA {
  id_compra: pd.id_compra,
  nombre_producto: pd.nombre_producto,
  cantidad: pd.cantidad,
  precio_unitario: pd.precio_unitario,
  precio_total: pd.precio_total,
  fecha_pedido: pd.fecha_pedido,
  fecha_recepcion: pd.fecha_recepcion,
  id_proveedor: newProvider.ID
}]->(newProvider)
DELETE pd
RETURN e, oldProvider, newProvider;
```

#### Q15

Descripcion: Eliminar todos los clientes que han realizado devoluciones.

```bash
MATCH (c:Cliente)-[d:DEVOLUCION]->(e:Empresa)
DETACH DELETE c;
```

### Postman

#### Endpoints

##### Gets

###### Consulta - Q1

- **GET /api/q1**
- **Descripción:** Obtener la lista de productos que tienen menos de 10 unidades en stock.
- **Respuesta:**

```json
{
    "Productos": [
        {
            "Nombre": "Televisor OLED 4K 65",
            "Stokc": {
                "low": 10,
                "high": 0
            }
        },
        {
            "Nombre": "Smart TV QLED 75",
            "Stokc": {
                "low": 8,
                "high": 0
            }
        },
        {
            "Nombre": "Televisor Smart UHD 8K 85",
            "Stokc": {
                "low": 5,
                "high": 0
            }
        },
        {
            "Nombre": "Laptop Premium Ultra",
            "Stokc": {
                "low": 0,
                "high": 0
            }
        },
        {
            "Nombre": "Smart TV OLED 55",
            "Stokc": {
                "low": 0,
                "high": 0
            }
        },
        {
            "Nombre": "Smartphone Pro Max",
            "Stokc": {
                "low": 0,
                "high": 0
            }
        },
        {
            "Nombre": "Tableta Avanzada X",
            "Stokc": {
                "low": 0,
                "high": 0
            }
        },
        {
            "Nombre": "Monitor Curvo 34",
            "Stokc": {
                "low": 0,
                "high": 0
            }
        }
    ]
}
```

###### Consulta - Q2

- **post /api/q2**
- **Descripción:** Encontrar los proveedores que suministran productos de una categoría en específico.
Aqui las categorias que podemos buscar son las siguientes:

    1. Laptops
    2. Televisores
    3. Almacenamiento
    4. Periféricos
    5. Audio
    6. Accesorios
    7. Smartphones
    8. Tabletas
    9. Monitores
    10. Computadoras

- **Cuerpo de la solicitud:**

```json
{
    "categoria": "Televisores"
}
```

- **Respuest**:

```json
{
    "Proveedores": [
        {
            "proveedor": {
                "Telefono": "+1 415 987 6543",
                "Pais_de_origen": "Estados Unidos",
                "correo": "ventas@digitalworld.com",
                "ID": {
                    "low": 2,
                    "high": 0
                },
                "nombre": "Digital World Corp"
            },
            "producto": {
                "descripcion": "Televisor OLED con resolución 4K, 65 pulgadas y HDR10+",
                "id_proveedor": {
                    "low": 2,
                    "high": 0
                },
                "precio": {
                    "low": 35000,
                    "high": 0
                },
                "codigo": {
                    "low": 402,
                    "high": 0
                },
                "categoria": "Televisores",
                "stock": {
                    "low": 10,
                    "high": 0
                },
                "nombre": "Televisor OLED 4K 65"
            }
        },
        {
            "proveedor": {
                "Telefono": "+1 415 987 6543",
                "Pais_de_origen": "Estados Unidos",
                "correo": "ventas@digitalworld.com",
                "ID": {
                    "low": 2,
                    "high": 0
                },
                "nombre": "Digital World Corp"
            },
            "producto": {
                "descripcion": "Televisor OLED de 55 pulgadas con resolución 4K y HDR",
                "id_proveedor": {
                    "low": 2,
                    "high": 0
                },
                "precio": {
                    "low": 32000,
                    "high": 0
                },
                "codigo": {
                    "low": 422,
                    "high": 0
                },
                "categoria": "Televisores",
                "stock": {
                    "low": 0,
                    "high": 0
                },
                "nombre": "Smart TV OLED 55"
            }
        },
        {
            "proveedor": {
                "Telefono": "+52 81 2345 6789",
                "Pais_de_origen": "México",
                "correo": "innovacion@global.com",
                "ID": {
                    "low": 4,
                    "high": 0
                },
                "nombre": "Innovación Global"
            },
            "producto": {
                "descripcion": "Televisor QLED de 75 pulgadas con resolución 8K y sonido envolvente",
                "id_proveedor": {
                    "low": 4,
                    "high": 0
                },
                "precio": {
                    "low": 50000,
                    "high": 0
                },
                "codigo": {
                    "low": 404,
                    "high": 0
                },
                "categoria": "Televisores",
                "stock": {
                    "low": 8,
                    "high": 0
                },
                "nombre": "Smart TV QLED 75"
            }
        },
        {
            "proveedor": {
                "Pais_de_origen": "Japón",
                "Telefono": "+81 3 1234 5678",
                "correo": "contacto@innovatek.jp",
                "ID": {
                    "low": 8,
                    "high": 0
                },
                "nombre": "Innovatek Inc."
            },
            "producto": {
                "descripcion": "Televisor 4K de 70 pulgadas con tecnología de inteligencia artificial",
                "id_proveedor": {
                    "low": 8,
                    "high": 0
                },
                "precio": {
                    "low": 27000,
                    "high": 0
                },
                "codigo": {
                    "low": 408,
                    "high": 0
                },
                "categoria": "Televisores",
                "stock": {
                    "low": 18,
                    "high": 0
                },
                "nombre": "TV 4K UHD 70"
            }
        },
        {
            "proveedor": {
                "Telefono": "+33 1 2345 6789",
                "Pais_de_origen": "Francia",
                "correo": "info@digitalluxury.fr",
                "ID": {
                    "low": 10,
                    "high": 0
                },
                "nombre": "Digital Luxury Goods"
            },
            "producto": {
                "descripcion": "Televisor UHD 8K de 85 pulgadas, ideal para grandes espacios",
                "id_proveedor": {
                    "low": 10,
                    "high": 0
                },
                "precio": {
                    "low": 60000,
                    "high": 0
                },
                "codigo": {
                    "low": 410,
                    "high": 0
                },
                "categoria": "Televisores",
                "stock": {
                    "low": 5,
                    "high": 0
                },
                "nombre": "Televisor Smart UHD 8K 85"
            }
        }
    ]
}
```

###### Consulta - Q4

- **GET /api/q4**
- **Descripción:** Encontrar los productos que han sido comprados por más de 5 clientes diferentes.
- **Respuesta:**

```json
{
    "Productos": [
        {
            "Producto": "Monitor 24 Full HD",
            "Total_Clientes": {
                "low": 5,
                "high": 0
            },
            "Nombres_Clientes": [
                "María López",
                "Carlos Martínez",
                "Grupo Tech Solutions",
                "Sofía López",
                "Compañía XYZ"
            ]
        },
        {
            "Producto": "Mouse Gaming RGB",
            "Total_Clientes": {
                "low": 7,
                "high": 0
            },
            "Nombres_Clientes": [
                "Juan Pérez",
                "Carlos Martínez",
                "Grupo Tech Solutions",
                "Fernando Rodríguez",
                "Ana García",
                "Innovaciones 360",
                "Sofía Ramírez"
            ]
        },
        {
            "Producto": "Mousepad Gaming XXL",
            "Total_Clientes": {
                "low": 5,
                "high": 0
            },
            "Nombres_Clientes": [
                "Ana García",
                "Luis Martínez",
                "Innovaciones 360",
                "Laura Fernández",
                "Sofía Ramírez"
            ]
        }
    ]
}
```

###### Consulta - Q5

- **GET /api/q5**
- **Descripción:** Obtener la lista de todos los  proveedores.
- **Respuesta:**

```json
{
    "Proveedores": [
        "ElectroTech Solutions",
        "Digital World Corp",
        "Premium Gadgets SA",
        "Innovación Global",
        "TecnoHogar Ltd.",
        "Future Vision Electronics",
        "SmartHome Global",
        "Innovatek Inc.",
        "Bright Screens Ltd.",
        "Digital Luxury Goods"
    ]
}
```

###### Consulta - Q7

- **GET /api/q7**
- **Descripción:** Listar los pedidos de venta que tienen un valor total mayor a $10,000.
- **Respuesta:**

```json
{
    "PEDIDO_DE_VENTA": [
        {
            "Empresa": "Handtech",
            "Nombre_Cliente": "María López",
            "Productos": [
                "Smart TV QLED 75"
            ],
            "Total": {
                "low": 50000,
                "high": 0
            }
        },
        {
            "Empresa": "Handtech",
            "Nombre_Cliente": "Compañía XYZ",
            "Productos": [
                "SSD 1TB NVMe"
            ],
            "Total": {
                "low": 15000,
                "high": 0
            }
        },
        {
            "Empresa": "Handtech",
            "Nombre_Cliente": "Compañía XYZ",
            "Productos": [
                "Ultrabook Empresarial",
                "All-in-One 27 4K",
                "Monitor 24 Full HD",
                "Cámara Web HD"
            ],
            "Total": {
                "low": 77400,
                "high": 0
            }
        },
        {
            "Empresa": "Handtech",
            "Nombre_Cliente": "Innovaciones 360",
            "Productos": [
                "SSD 1TB NVMe",
                "Mouse Gaming RGB",
                "Mousepad Gaming XXL"
            ],
            "Total": {
                "low": 22000,
                "high": 0
            }
        },
        {
            "Empresa": "Handtech",
            "Nombre_Cliente": "Grupo Tech Solutions",
            "Productos": [
                "Cámara Web HD",
                "Monitor 24 Full HD"
            ],
            "Total": {
                "low": 15600,
                "high": 0
            }
        },
        {
            "Empresa": "Handtech",
            "Nombre_Cliente": "Servicios Integrales SA",
            "Productos": [
                "Ultrabook Empresarial",
                "All-in-One 27 4K"
            ],
            "Total": {
                "low": 81000,
                "high": 0
            }
        },
        {
            "Empresa": "Handtech",
            "Nombre_Cliente": "Carlos Martínez",
            "Productos": [
                "Televisor OLED 4K 65"
            ],
            "Total": {
                "low": 35000,
                "high": 0
            }
        },
        {
            "Empresa": "Handtech",
            "Nombre_Cliente": "Juan Pérez",
            "Productos": [
                "Laptop Creativa Pro"
            ],
            "Total": {
                "low": 30000,
                "high": 0
            }
        }
    ]
}
```

###### Consulta - Q11

- **GET /api/q11**
- **Descripción:** Obtener la lista de clientes.
- **Respuesta:**

```json
{
    "Cliente": [
        "Juan Pérez",
        "María López",
        "Compañía XYZ",
        "Carlos Martínez",
        "Sofía Ramírez",
        "Grupo Tech Solutions",
        "Andrés González",
        "Innovaciones 360",
        "Laura Fernández",
        "Servicios Integrales SA",
        "Ana García",
        "Luis Martínez",
        "Sofía López",
        "Fernando Rodríguez"
    ]
}
```

##### Posts

###### Consulta - Q8

- **GET /api/q8**
- **Descripción:** Cambiar todos los productos suministrados por un proveedor a otro proveedor.
- **Cuerpo de la solicitud:**

```json
{
    "oldProveedor": 1,
    "newProveedor": 2
}
```

- **Respuesta:**

```json
{
    "Productos": [
        {
            "descripcion": "Laptop de alto rendimiento con procesador Intel i9, 32GB RAM, 1TB SSD",
            "id_proveedor": 2,
            "precio": {
                "low": 45000,
                "high": 0
            },
            "codigo": {
                "low": 401,
                "high": 0
            },
            "categoria": "Laptops",
            "stock": {
                "low": 15,
                "high": 0
            },
            "nombre": "Laptop Premium Ultra"
        },
        {
            "descripcion": "Disco duro sólido NVMe de 1TB, velocidad de lectura 3500 MB/s",
            "id_proveedor": 2,
            "precio": {
                "low": 3000,
                "high": 0
            },
            "codigo": {
                "low": 411,
                "high": 0
            },
            "categoria": "Almacenamiento",
            "stock": {
                "low": 50,
                "high": 0
            },
            "nombre": "SSD 1TB NVMe"
        },
        {
            "descripcion": "Laptop de alto rendimiento con procesador Intel i9, 32GB RAM, 1TB SSD",
            "id_proveedor": 2,
            "precio": {
                "low": 45000,
                "high": 0
            },
            "codigo": {
                "low": 421,
                "high": 0
            },
            "categoria": "Laptops",
            "stock": {
                "low": 0,
                "high": 0
            },
            "nombre": "Laptop Premium Ultra"
        }
    ]
}
```

###### Consulta - Q12

- **GET /api/q12**
- **Descripción:** Eliminar todos los proveedores y sus nodos asociados.
- **Respuesta:**

```json
{
    "mensaje": "Proveedores eliminados correctamente"
}
```

###### Consulta - Q13

- **GET /api/13**
- **Descripción:** Todos los productos de una categoría específica eliminados del inventario.
                    Al igual que la Consulta Q2, las categorías son las mismas.
- **Cuerpo de la solicitud:**

```json
{
    "categoria":"Laptops"
}
```

- **Respuesta:**

```json
{
    "mensaje": "Productos eliminados correctamente"
}
```

###### Consulta - Q14

- **GET /api/q14**
- **Descripción:** Todos los pedidos de compra de un proveedor en particular son transferidos a otro proveedor por un cambio de contrato.
- **Cuerpo de la solicitud:**

```json
{
  "nombrOldProveedor": "Digital World Corp",
  "nombreNewProveedor": "Digital Luxury Goods"
}
```

- **Respuesta:**

```json
{
    "proveedores": [
        {
            "Telefono": "+33 1 2345 6789",
            "Pais_de_origen": "Francia",
            "correo": "info@digitalluxury.fr",
            "ID": {
                "low": 10,
                "high": 0
            },
            "nombre": "Digital Luxury Goods"
        },
        {
            "Telefono": "+33 1 2345 6789",
            "Pais_de_origen": "Francia",
            "correo": "info@digitalluxury.fr",
            "ID": {
                "low": 10,
                "high": 0
            },
            "nombre": "Digital Luxury Goods"
        }
    ]
}
```

###### Consulta - Q15

- **GET /api/q15**
- **Descripción:** Eliminar todos los clientes que han realizado devoluciones.
- **Respuesta:**

```json
{
    "mensaje": "Clientes con devoluciones eliminados correctamente"
}
```

### JSON de la colección de datos

Este es un archivo JSON que contiene la colección de datos que se exporto directamente de postman.

```json
{
"info": {
  "_postman_id": "5b7072c8-9c96-46ff-81fa-bed9bd3bba7f",
  "name": "Neo4J",
  "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
  "_exporter_id": "29523940"
 },
 "item": [
  {
   "name": "Gets",
   "item": [
    {
     "name": "Consulta:Q1",
     "request": {
      "method": "GET",
      "header": [],
      "url": {
       "raw": "http://localhost:3001/api/q1",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q1"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q11",
     "request": {
      "method": "GET",
      "header": [],
      "url": {
       "raw": "http://localhost:3001/api/q11",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q11"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q2",
     "request": {
      "method": "POST",
      "header": [],
      "body": {
       "mode": "raw",
       "raw": "{\n    \"categoria\": \"Televisores\"\n}",
       "options": {
        "raw": {
         "language": "json"
        }
       }
      },
      "url": {
       "raw": "http://localhost:3001/api/q2",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q2"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q5",
     "protocolProfileBehavior": {
      "disableBodyPruning": true
     },
     "request": {
      "method": "GET",
      "header": [],
      "body": {
       "mode": "raw",
       "raw": "",
       "options": {
        "raw": {
         "language": "json"
        }
       }
      },
      "url": {
       "raw": "http://localhost:3001/api/q5",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q5"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q7",
     "request": {
      "method": "GET",
      "header": [],
      "url": {
       "raw": "http://localhost:3001/api/q7",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q7"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q4",
     "request": {
      "method": "GET",
      "header": [],
      "url": {
       "raw": "http://localhost:3001/api/q4",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q4"
       ]
      }
     },
     "response": []
    }
   ],
   "description": "Aqui se localizan los Gets hacia Neo4j"
  },
  {
   "name": "Posts",
   "item": [
    {
     "name": "Consulta:Q12",
     "request": {
      "method": "POST",
      "header": [],
      "url": {
       "raw": "http://localhost:3001/api/q12",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q12"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q8",
     "request": {
      "method": "POST",
      "header": [],
      "body": {
       "mode": "raw",
       "raw": "{\n    \"oldProveedor\": 1,\n    \"newProveedor\": 2\n}",
       "options": {
        "raw": {
         "language": "json"
        }
       }
      },
      "url": {
       "raw": "http://localhost:3001/api/q8",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q8"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q13",
     "request": {
      "method": "POST",
      "header": [],
      "body": {
       "mode": "raw",
       "raw": "{\n    \"categoria\":\"Laptops\"\n}",
       "options": {
        "raw": {
         "language": "json"
        }
       }
      },
      "url": {
       "raw": "http://localhost:3001/api/q13",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q13"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q14",
     "request": {
      "method": "POST",
      "header": [],
      "body": {
       "mode": "raw",
       "raw": "{\n  \"nombrOldProveedor\": \"Digital World Corp\",\n  \"nombreNewProveedor\": \"Digital Luxury Goods\"\n}\n",
       "options": {
        "raw": {
         "language": "json"
        }
       }
      },
      "url": {
       "raw": "http://localhost:3001/api/q14",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q14"
       ]
      }
     },
     "response": []
    },
    {
     "name": "Consulta:Q15",
     "request": {
      "method": "POST",
      "header": [],
      "url": {
       "raw": "http://localhost:3001/api/q15",
       "protocol": "http",
       "host": [
        "localhost"
       ],
       "port": "3001",
       "path": [
        "api",
        "q15"
       ]
      }
     },
     "response": []
    }
   ]
  }
 ]
}
```

### BackEnd

En este apartado se encontraran lo archivos correspondientes al BackEnd de la aplicación.

#### Archivos de las Rutas

##### rutasClientes.js

```bash
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
```

##### rutasPedidosCompras.js

```bash
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
```

##### rutasPedidosVentas.js

```bash
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
```

##### rutasProductos.js

```bash
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
```

##### rutasProveedores.js

```bash
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

```

#### Archivos logger y server

##### logger.js

```bash
const redis = require('redis');

const client = redis.createClient({
    socket: {
      port: process.env.REDIS_PORT || 6379,
      host: process.env.REDIS_HOST || "127.0.0.1"
    },
  });
  

client.connect().catch(console.error); // Captura cualquier error de conexión

//Exportar una función middleware que se ejecutará en cada solicitud
module.exports = (req, res, next) => {
    res.on('finish', async () => {
    let fecha = new Date();
        const key = `${req.method}:${fecha.toLocaleDateString() + ":" + fecha.getHours() + "-" + fecha.getMinutes() +
        "-" + fecha.getSeconds()}:${"URL:"+req.originalUrl}`;
        const valor = JSON.stringify({
            clave: key,
            time: new Date(),
            req: {
                method: req.method,
                url: req.originalUrl,
                headers: req.headers,
                query: req.queryLog || 'N/A',
                body: req.body,
            },
            res: {
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                response: res.data
            }
        }, null, 2);
        //console.log(valor);

        client.set(key, valor);
    });
    next();
};
```

##### server.js

```bash
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
```

### Cómo Ejecutar la API

1. Instala las dependencias:

```bash
    npm install
```

1. Ejecuta el servidor:

```bash
    npm run start
```

### Cómo Ejecutar Desde un Docker Compose

Para ejecutar esta api desde un Docker Compose, copia el siguiente código en un archivo **.yml** con el dombre "docker-compose", en tu terminal navega hasta la ruta donde tienes guardado el archivo y ejecuta el siguiente comando "docker compose up -d".

```bash
services:
  app:
    image: silverhair/neo4j-lab
    container_name: rutas_api
    ports:
      - "3001:4000" # Mapea el puerto 4000 del contenedor al 3001 del host
    environment:
      - NEO4J_URI=neo4j://neo:7687
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    depends_on:
      - neo
      - redis
    networks:
      backend:
        ipv4_address: 172.18.0.10
    command: npm start

  neo:
    image: neo4j:latest
    container_name: neo4j-lab
    ports:
      - "7474:7474" # Interfaz web de Neo4j
      - "7687:7687" # Puerto Bolt para conexiones
    networks:
      backend:
        ipv4_address: 172.18.0.2
    environment:
      - NEO4J_AUTH=none

  redis:
    image: redis:latest
    container_name: redis-lab-cache
    ports:
      - "6379:6379" # Puerto estándar de Redis
    networks:
      backend:
        ipv4_address: 172.18.0.3

  redis-insight:
    image: redislabs/redisinsight:latest
    container_name: redis-insight
    ports:
      - "8001:8001" # Puerto para acceder a la interfaz de Redis Insight
    networks:
      backend:
        ipv4_address: 172.18.0.4

networks:
  backend:
    driver: bridge
    ipam:
      config:
        - subnet: 172.18.0.0/24 # Subred personalizada para evitar conflictos
```
