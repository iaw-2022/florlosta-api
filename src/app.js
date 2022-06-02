const express = require('express');

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

module.exports = app;