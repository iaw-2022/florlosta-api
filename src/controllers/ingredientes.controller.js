const db = require('../database');

const getIngredientes = async (req, res) => {
    const response = await db.query('SELECT * FROM ingredientes');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

module.exports = {
    getIngredientes
}