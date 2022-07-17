const express = require('express');
const contestantRouter = express.Router();
const Contestant = require('../models/contestant');

contestantRouter.route('/')
.get(async (req, res, next) => {
    try {
        const aContestants = await  Contestant.find().populate('user game').exec();
        res.status(200).json(aContestants);
    } catch (error) {
        next(error)
    }
})
.post(async (req, res, next) => {
    try {
        const newContestant = await  Contestant.create(req.body).exec();
        res.status(200).json(newContestant);
    } catch (error) {
        next(error)
    }
})
.put(async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contestant');
})
.delete( async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /contestant');
});

contestantRouter.route('/:contestantId')
.get(async (req, res, next) => {
    try {
        oContestant = await Contestant.findById(req.params.contestantId).populate('user game').exec();
        if (!oContestant) throw new Error('Contestant not found')
        res.status(200).json(oContestant);
    } catch (error) {
        next(error)
    }
})
.post(async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /contestant/:contestantId');
})
.put(verifyUser, async (req, res, next) => {
    try {
        const oContestant = await Genre.findByIdAndUpdate(req.params.contestantId, {$set: req.body}, { new: true });
        if (!oContestant) throw new Error(`Contestant not found for id ${req.params.contestantId}`);
        res.json(200, oContestant);
    } catch (error) {
        next(error);
    }
})
.delete(verifyUser, async (req, res, next) => {
    try {
        const response = await Contestant.findByIdAndDelete(req.params.contestantId)
        res.status(200).json({_id: response._id});
    } catch (error) {
        next(error);
    }
});

module.exports = contestantRouter;