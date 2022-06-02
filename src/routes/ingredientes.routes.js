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
 *         description: Respuesta correcta
 *       '404':
 *         description: No se encontró respuesta
 */
router.get('/', ingredientesController.getIngredientes);

module.exports = router;

