const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
	_id: Number,
	display_name: String,
	location: String,
	name: String,
	is_active: {type: Boolean, default: true},
	abbreviation: String
});

module.exports = mongoose.model('Team', teamSchema);