const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    game_type: {type: mongoose.Schema.Types.ObjectId, ref: 'type'},
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    winner: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    contestants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'contestant'}],
    week: String,
    is_year_long: {type: Boolean, default: false},
    is_playoffs: {type: Boolean, default: false},
    football_games: [
        {
            visitor: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
            home: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
            winner: {type: String, enum: ['visitor', 'home']},
            visitor_score: Number,
            home_score: Number,
            handicap: Number
        }
    ],
    is_child_game: {type: Boolean, default: false},
    parent_game: {type: Schema.Types.ObjectId, ref: 'game'},
    child_games: [{type: Schema.Types.ObjectId, ref: 'game'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);