const ActorRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteActor } = require('./actor.controller');

ActorRoutes.get('/', getAll)
ActorRoutes.get('/:id', getById)
ActorRoutes.post('/', create)
ActorRoutes.patch('/:id', update)
ActorRoutes.delete('/:id', deleteActor)

module.exports = ActorRoutes