const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true, unique: true },
    password: { type: String, required: true},
    first_name: {type: String, required: true },
    last_name: {type: String, required: true},
    status: {type: String, enum: ['Inactive', 'Active'], defualt: 'Active'},
    is_admin: {type: Boolean, default: false},
    last_login: {type: Date, default: Date.now}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);