const express = require('express');
const ingredientesRoutes = require('./routes/ingredientes.routes');
const productosRoutes = require('./routes/productos.routes');
const tipospielRoutes = require('./routes/tipospiel.routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
const cors = require('cors');
//app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.json({
        message: 'api',
    })
});

app.use('/doc-skincare', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/ingredientes', ingredientesRoutes);
app.use('/productos', productosRoutes);
app.use('/tipospiel', tipospielRoutes);



module.exports = app;