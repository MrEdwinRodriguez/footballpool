const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    first_name: {type: String },
    last_name: {type: String},
    status: {type: String, enum: ['Inactive', 'Active'], defualt: 'Active'},
    is_admin: {type: Boolean, default: false},
	last_login: {type: Date, default: Date.now},
	terms: Boolean
}, {
    timestamps: true
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);