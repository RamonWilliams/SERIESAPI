const ChapterRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteChapter } = require('./chapter.controller');

ChapterRoutes.get('/', getAll)
ChapterRoutes.get('/:id', getById)
ChapterRoutes.post('/', create)
ChapterRoutes.patch('/:id', update)
ChapterRoutes.delete('/:id', deleteChapter)

module.exports = ChapterRoutes