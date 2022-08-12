
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    date: { type: String, required: true }, 
    description:{ type: String, required: true }, 
    chapters: [{ type:Schema.Types.ObjectId, ref:"chapters"}],
    actors: [{ type:Schema.Types.ObjectId, ref:"actors"}]
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('seasons', schema);