
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    date: { type: String, required: true }, 
    actors:[{type:Schema.Types.ObjectId, ref:"actors"}],
    seasons: [{ type:Schema.Types.ObjectId, ref:"seasons"}]
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('series', schema);