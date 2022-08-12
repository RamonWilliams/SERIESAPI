const Chapter = require('./chapter.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const chapters = await Chapter.find().populate("seasons");
        return res.json({
            status: 200,
            message: 'Recovered all chapters',
            data: {  chapters }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const chapter = await Chapter.findById(id);
        if (!chapter) return next(setError(404, 'Chapter not found'))
        return res.json({
            status: 200,
            message: 'Recovered all chapters',
            data: { chapter }
        });
    } catch (error) {
        return next(setError(500, 'Failed actor'))
    }
}

const create = async (req, res, next) => {
    try {
        const chapter = new Chapter(req.body)
        const chapterInBd = await chapter.save()
        return res.json({
            status: 201,
            message: 'Created new chapter',
            data: {  chapterInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created chapter'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const chapter = new Chapter(req.body);
        chapter._id = id;
        const updatedChapter = await Chapter.findByIdAndUpdate(id, chapter)
        if (!updatedChapter) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated chapter',
            data: {  updatedChapter }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated chapter'));
    }
}

const deleteChapter = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedChapter = await Chapter.findByIdAndDelete(id)
        if (!deletedChapter) return next(setError(404, 'Chapter not found'))
        return res.json({
            status: 200,
            message: 'deleted chapter',
            data: { deletedChapter }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted chapter'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteChapter
}