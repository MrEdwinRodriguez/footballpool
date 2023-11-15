const express = require('express');
const commentRouter = express.Router();
const Comment = require('../models/comment');
const {verifyUser} = require('../authenticate');
const cors = require('./cors');

commentRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        const aComments = await  Comment.find().populate('user').exec();
        res.status(200).json(aComments);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const newComment = await  Comment.create(req.body).populate('user').exec();
        res.status(200).json(newComment);
    } catch (error) {
        next(error)
    }
})
.put(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /comment');
})
.delete(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /comment');
});

commentRouter.route('/:commentId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        oComment = await Comment.findById(req.params.commentId).populate('user').exec();
        if (!oComment) throw new Error('Comment not found')
        res.status(200).json(oComment);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /comment/:commentId');
})
.put(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const oComment = await Comment.findByIdAndUpdate(req.params.commentId, {$set: req.body}, { new: true });
        if (!oComment) throw new Error(`Comment not found for id ${req.params.commentId}`);
        res.json(200, oComment);
    } catch (error) {
        next(error);
    }
})
.delete(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const response = await Comment.findByIdAndDelete(req.params.commentId)
        res.status(200).json({_id: response._id});
    } catch (error) {
        next(error);
    }
});

module.exports = commentRouter;