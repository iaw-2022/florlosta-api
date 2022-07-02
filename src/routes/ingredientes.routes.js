const express = require('express');
const router = express.Router();
const ingredientesController = require('../controllers/ingredientes.controller');

/**
 * @swagger
 * /ingredientes:
 *   get:
 *     description: Se utiliza para obtener todos los ingredientes del diccionario.
 *     tags: 
 *       - Ingredientes
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '404':
 *         description: No se encontró respuesta.
 */
router.get('/', ingredientesController.getIngredientes);

/**
 * @swagger
 * /ingredientes/{id}:
 *   get:
 *     description: Se utiliza para filtar un ingrediente a partir de su ID.
 *     tags: 
 *       - Ingredientes
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del ingrediente.
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '400':
 *         description: Parametro inválido. 
 *       '404':
 *         description: No se encontró respuesta.
 */
router.get('/:id', ingredientesController.getIngredientesbyId);

/**
 * @swagger
 * /ingredientes/nombre:
 *   post:
 *     description: Se utiliza para obtener la información de un ingrediente según su nombre. Distingue mayusculas de minusculas y palabras con tilde.
 *     parameters:
 *       - in: body
 *         type: object
 *         name: body
 *         required: true
 *         properties:
 *           nombre:    
 *             type: string
 *     tags: 
 *       - Ingredientes
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '404':
 *         description: No se encontró respuesta.
 */

router.post('/nombre', ingredientesController.getIngredientesbyName);


module.exports = router;

