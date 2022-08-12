const SerieRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteSerie } = require('./serie.controller');

SerieRoutes.get('/', getAll)
SerieRoutes.get('/:id', getById)
SerieRoutes.post('/', create)
SerieRoutes.patch('/:id', update)
SerieRoutes.delete('/:id', deleteSerie)

module.exports = SerieRoutes