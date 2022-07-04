const db = require('../database');

const getTiposPiel = async (req, res) => {
    const response = await db.query('SELECT * FROM tipospiel');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getTiposPielNormal = async (req, res) => {
    const response = await db.query('SELECT * FROM tipospiel WHERE id_tipopiel = 1');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getTiposPielGrasa = async (req, res) => {
    const response = await db.query('SELECT * FROM tipospiel WHERE id_tipopiel = 2');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getTiposPielSeca = async (req, res) => {
    const response = await db.query('SELECT * FROM tipospiel WHERE id_tipopiel = 3');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getTiposPielMixta = async (req, res) => {
    const response = await db.query('SELECT * FROM tipospiel WHERE id_tipopiel = 4');

    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};


module.exports = {
    getTiposPiel,
    getTiposPielNormal,
    getTiposPielGrasa,
    getTiposPielSeca,
    getTiposPielMixta
}