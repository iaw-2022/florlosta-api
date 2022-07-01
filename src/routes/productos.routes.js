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


/**
 * @swagger
 * /productos/nombre:
 *   post:
 *     description: Se utiliza para obtener la información de un producto según su nombre. Distingue mayusculas de minusculas y palabras con tilde.
 *     parameters:
 *       - in: body
 *         type: object
 *         name: body
 *         required: true
 *         properties:
 *           nombre:    
 *             type: string
 *     tags: 
 *       - Productos
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '404':
 *         description: No se encontró respuesta.
 */

 router.post('/nombre', productosController.getProductosbyName);


module.exports = router;
