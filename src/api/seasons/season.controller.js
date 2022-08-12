const Season = require('./season.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const seasons = await Season.find().populate("chapters actors");
        return res.json({
            status: 200,
            message: 'Recovered all seasons',
            data: {  seasons }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const season = await Season.findById(id);
        if (!season) return next(setError(404, 'Season not found'))
        return res.json({
            status: 200,
            message: 'Recovered all seasons',
            data: { season }
        });
    } catch (error) {
        return next(setError(500, 'Failed season'))
    }
}

const create = async (req, res, next) => {
    try {
        const season = new Chapter(req.body)
        const seasonInBd = await Season.save()
        return res.json({
            status: 201,
            message: 'Created new season',
            data: {  seasonInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created season'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const season = new Season(req.body);
        season._id = id;
        const updatedSeason = await Season.findByIdAndUpdate(id, season)
        if (!updatedSeason) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated season',
            data: {  updatedSeason }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated season'));
    }
}

const deleteSeason = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedSeason = await Season.findByIdAndDelete(id)
        if (!deletedSeason) return next(setError(404, 'Season not found'))
        return res.json({
            status: 200,
            message: 'deleted season',
            data: { deletedSeason }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted season'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteSeason
}