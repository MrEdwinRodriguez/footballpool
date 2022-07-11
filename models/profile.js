const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {type: mongoose.Schema.Types.type, ref: 'user'},
    ranking: {type: Number, default: 0},
    username: {type: String, unique: true, required: true},
    bio: String,
    profileImage: String,
    phone_number: String,
    emails_on: {type: Boolean, default: true}
},{
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);