const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const type = new Schema({
    name: {type: String, required: true},
    description: {type: String}
}, {
    timestamps: true
});

module.exports = mongoose.model('Type', type)