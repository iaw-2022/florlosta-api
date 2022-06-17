const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

/**
 * @swagger
 * /productos:
 *   get:
 *     description: Se utiliza para obtener todos los productos del diccionario.
 *     tags: 
 *       - Productos
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '404':
 *         description: No se encontró respuesta.
 */
 router.get('/', productosController.getProductos);

 /**
 * @swagger
 * /productos/{id}:
 *   get:
 *     description: Se utiliza para filtar un producto a partir de su ID.
 *     tags: 
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto.
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '400':
 *         description: Parametro inválido. 
 *       '404':
 *         description: No se encontró respuesta.
 */
router.get('/:id', productosController.getProductosbyId);

module.exports = router;
