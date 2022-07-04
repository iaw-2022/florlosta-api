const express = require('express');
const router = express.Router();
const tipospielController = require('../controllers/tipospiel.controller');

/**
 * @swagger
 * /tipospiel:
 *   get:
 *     description: Se utiliza para obtener todos los tipos de piel.
 *     tags: 
 *       - Tipos de piel
 *     responses:
 *       '200':
 *         description: Respuesta correcta
 *       '404':
 *         description: No se encontró respuesta
 */
 router.get('/', tipospielController.getTiposPiel);

 /**
 * @swagger
 * /tipospiel/normal:
 *   get:
 *     description: Se utiliza para obtener la información sobre la piel normal.
 *     tags: 
 *       - Tipos de piel
 *     responses:
 *       '200':
 *         description: Respuesta correcta
 *       '404':
 *         description: No se encontró respuesta
 */
  router.get('/normal', tipospielController.getTiposPielNormal);

  /**
 * @swagger
 * /tipospiel/grasa:
 *   get:
 *     description: Se utiliza para obtener la información sobre la piel grasa.
 *     tags: 
 *       - Tipos de piel
 *     responses:
 *       '200':
 *         description: Respuesta correcta
 *       '404':
 *         description: No se encontró respuesta
 */
   router.get('/grasa', tipospielController.getTiposPielGrasa);

  /**
 * @swagger
 * /tipospiel/seca:
 *   get:
 *     description: Se utiliza para obtener la información sobre la piel seca.
 *     tags: 
 *       - Tipos de piel
 *     responses:
 *       '200':
 *         description: Respuesta correcta
 *       '404':
 *         description: No se encontró respuesta
 */
   router.get('/seca', tipospielController.getTiposPielSeca);

  /**
 * @swagger
 * /tipospiel/mixta:
 *   get:
 *     description: Se utiliza para obtener la información sobre la piel mixta.
 *     tags: 
 *       - Tipos de piel
 *     responses:
 *       '200':
 *         description: Respuesta correcta
 *       '404':
 *         description: No se encontró respuesta
 */
   router.get('/mixta', tipospielController.getTiposPielMixta);

 module.exports = router;