const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skiSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    terrain: {
        type: Array,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    skillLevel: {
        type: String,
        required: true
    },
    speed: {
        type: Array,
        required: true
    },
    turnRadius: {
        type: Array,
        required: true
    },
    snow: {
        type: String,
        required: true
    },
    tRank: { 
        type: Object
    } 
})

const Ski = mongoose.model('Ski', skiSchema);

module.exports = Ski