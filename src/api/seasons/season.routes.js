const SeasonRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteSeason } = require('./season.controller');

SeasonRoutes.get('/', getAll)
SeasonRoutes.get('/:id', getById)
SeasonRoutes.post('/', create)
SeasonRoutes.patch('/:id', update)
SeasonRoutes.delete('/:id', deleteSeason)

module.exports = SeasonRoutes