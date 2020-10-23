const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skiSchema = new Schema({
    name: {
        type: Array,
        required: true,
        unique: true,
    },
    // terrain: {
    //     type: Array,
    //     required: true
    // },
    gender : {
        type: Array,
        required: true
    },
    skillLevel: {
        type: Array,
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
        type: Array,
        required: true
    }
    
})

const Ski = mongoose.model('Ski', skiSchema);

module.exports = Ski