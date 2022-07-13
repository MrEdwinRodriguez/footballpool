const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users'},
    action: {type: String, enum: ['like', 'dislike']},
})

const commentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users'},
	text: {type: String, required: true},
	name: {type: String },
    actions: [actionSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);