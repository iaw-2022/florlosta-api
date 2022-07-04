const config = require('./config');
const path = require("path")

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Diccionario de skincare API',
            description: 'Documentación de los diferentes endpoints de la API asociada al diccionario de skincare.',
            servers: [config.SERVER]
        },
    },
    apis: [`${path.join(__dirname, "./routes/*.routes.js")}`],
}

module.exports = swaggerOptions