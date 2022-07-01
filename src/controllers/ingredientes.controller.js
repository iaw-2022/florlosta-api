const db = require('../database');

const getIngredientes = async (req, res) => {
    const response = await db.query('SELECT * FROM ingredientes');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};


const getIngredientesbyId = async (req, res) => {
    const id = req.params.id; 
    const response = await db.query('SELECT * FROM ingredientes WHERE id_ingrediente = $1', [id]);
    
     if(response.rows.length > 0){
          res.status(200).json(response.rows);
      }else{
         res.status(404).json({error: 'not found'});
     }
};


const getIngredientesbyName = async (req, res) => {
    const {nombre} = req.body;

    const response = await db.query("SELECT * FROM ingredientes WHERE nombre_ingrediente LIKE $1", ['%'+nombre+'%']);

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};


const getIngredientesByProduct = async (req, res) => {
    const id = req.params.id; 
   const response = await db.query('SELECT nombre_producto, imagen FROM productos WHERE productos.id_producto IN (SELECT id_ingrediente FROM tiene WHERE tiene.id_ingrediente = $1)' [id],)

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

module.exports = {
    getIngredientes,
    getIngredientesbyName,
    getIngredientesbyId,
   getIngredientesByProduct
}