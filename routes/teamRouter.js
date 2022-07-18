const express = require('express');
const teamRouter = express.Router();
const Team = require('../models/team');

teamRouter.route('/')
.get(async (req, res, next) => {
    try {
        const aTeams = await  Team.find().populate('user').exec();
        res.status(200).json(aTeams);
    } catch (error) {
        next(error)
    }
})
.post(async (req, res, next) => {
    try {
        const newTeam = await  Team.create(req.body).populate('user').exec();
        res.status(200).json(newTeam);
    } catch (error) {
        next(error)
    }
})
.put(async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /team');
})
.delete( async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /team');
});

teamRouter.route('/:teamId')
.get(async (req, res, next) => {
    try {
        oTeam = await Team.findById(req.params.teamId).populate('user').exec();
        if (!oTeam) throw new Error('Team not found')
        res.status(200).json(oTeam);
    } catch (error) {
        next(error)
    }
})
.post(async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /team/:teamId');
})
.put(verifyUser, async (req, res, next) => {
    try {
        const oTeam = await Comment.findByIdAndUpdate(req.params.teamId, {$set: req.body}, { new: true });
        if (!oTeam) throw new Error(`Team not found for id ${req.params.teamId}`);
        res.json(200, oTeam);
    } catch (error) {
        next(error);
    }
})
.delete(verifyUser, async (req, res, next) => {
    try {
        const response = await Team.findByIdAndDelete(req.params.teamId)
        res.status(200).json({_id: response._id});
    } catch (error) {
        next(error);
    }
});

module.exports = teamRouter;