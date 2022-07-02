const db = require('../database');

const getProductos = async (req, res) => {
    const response = await db.query('SELECT * FROM productos');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getProductosbyId = async (req, res) => {
    const id = req.params.id; 
    const response = await db.query('SELECT * FROM productos WHERE id_producto = $1', [id]);
    
     if(response.rows.length > 0){
          res.status(200).json(response.rows);
      }else{
         res.status(404).json({error: 'not found'});
     }
};

module.exports = {
    getProductos,
    getProductosbyId
}