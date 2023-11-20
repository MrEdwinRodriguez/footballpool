const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weekSchema = new Schema({
	year: {type: Number, required: true,  defualt: new Date().getFullYear()},
	league: {type: String, default: 'NFL', enum: ['NFL', 'NCAAB']},
	week: Number, //week of season
    is_playoffs: {type: Boolean, default: false},
    competitions: [
        {
			name: String,
			shortName: String,
			date: Date,
			vanue: String,
			city: String,
			state: String,
			// visitor: String,
			// home: String,
            visitor: {type: Number, ref: 'team'}, //to be added later
            home: {type: Number, ref: 'team'},//to be added later
            winner: {type: String, enum: ['visitor', 'home']},
            visitor_score: Number,
            home_score: Number,
			handicap: Number,
			favorite: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
        }
    ],
    comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Week', weekSchema);