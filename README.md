# Documentación de la API de Neo4j

## Introducción

Este es un ejemplo de una API que permite realizar algunas consultas en Neo4j.

La API esta corriendo sobre <http://localhost:3001/>

### Contenido

- [Documentación de la API de Neo4j](#documentación-de-la-api-de-neo4j)
  - [Introducción](#introducción)
    - [Contenido](#contenido)
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
  - [Cómo Ejecutar la API](#cómo-ejecutar-la-api)
  - [Cómo Ejecutar Desde un Docker Compose](#cómo-ejecutar-desde-un-docker-compose)

## Endpoints

### Gets

#### Consulta - Q1

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

#### Consulta - Q2

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

#### Consulta - Q4

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

#### Consulta - Q5

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

#### Consulta - Q7

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

#### Consulta - Q11

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

### Posts

#### Consulta - Q8

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

#### Consulta - Q12

- **GET /api/q12**
- **Descripción:** Eliminar todos los proveedores y sus nodos asociados.
- **Respuesta:**

```json
{
    "mensaje": "Proveedores eliminados correctamente"
}
```

#### Consulta - Q13

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

#### Consulta - Q14

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

#### Consulta - Q15

- **GET /api/q15**
- **Descripción:** Eliminar todos los clientes que han realizado devoluciones.
- **Respuesta:**

```json
{
    "mensaje": "Clientes con devoluciones eliminados correctamente"
}
```

## Cómo Ejecutar la API

1. Instala las dependencias:

```bash
    npm install
```

1. Ejecuta el servidor:

```bash
    npm run start
```

## Cómo Ejecutar Desde un Docker Compose

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
