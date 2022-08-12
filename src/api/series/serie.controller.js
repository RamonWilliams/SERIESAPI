const Serie = require('./serie.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const series = await Serie.find().populate("actors seasons");
        return res.json({
            status: 200,
            message: 'Recovered all series',
            data: {  series }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const serie = await Serie.findById(id);
        if (!serie) return next(setError(404, 'Serie not found'))
        return res.json({
            status: 200,
            message: 'Recovered all series',
            data: { serie }
        });
    } catch (error) {
        return next(setError(500, 'Failed serie'))
    }
}

const create = async (req, res, next) => {
    try {
        const serie = new Serie(req.body)
        const serieInBd = await serie.save()
        return res.json({
            status: 201,
            message: 'Created new serie',
            data: {  serieInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created serie'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const serie = new Serie(req.body);
        serie._id = id;
        const updatedSerie = await Serie.findByIdAndUpdate(id, serie)
        if (!updatedSerie) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated serie',
            data: {  updatedSerie }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated serie'));
    }
}

const deleteSerie = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedSerie = await Season.findByIdAndDelete(id)
        if (!deletedSerie) return next(setError(404, 'Serie not found'))
        return res.json({
            status: 200,
            message: 'deleted serie',
            data: { deletedSerie }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted serie'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteSerie
}