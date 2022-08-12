const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    age: { type: Number, required: true },   
    description: { type: String, required: true },
    images: { type: String, required: true },
    series: [{ type:Schema.Types.ObjectId, ref:"series"}],
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('actors', schema);