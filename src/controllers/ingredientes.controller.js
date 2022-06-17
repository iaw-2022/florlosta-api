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
    const id_producto = req.params.id;
    const id_ingrediente = await db.query('SELECT * FROM tiene WHERE id_producto = $1', [id_producto]);
    const response = await db.query('SELECT * FROM ingredientes WHERE id_ingrediente = $1', [id_ingrediente]);

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