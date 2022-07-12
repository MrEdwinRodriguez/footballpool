const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contestantSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    game: {type: mongoose.Schema.Types.ObjectId, ref: 'game'},
    score: Number, //correct answers for the game
});

module.exports = mongoose.model("Contestant", contestantSchema);