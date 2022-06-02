const express = require('express');
const ingredientesRoutes = require('./routes/ingredientes.routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//app
const app = express();

//middlewares
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.json({
        message: 'api',
    })
});

app.use('/doc-skincare', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/ingredientes', ingredientesRoutes);

module.exports = app;