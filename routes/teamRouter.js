const express = require('express');
const teamRouter = express.Router();
const Team = require('../models/team');
const {verifyUser} = require('../authenticate');
const cors = require('./cors');

teamRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        const aTeams = await  Team.find().populate('user').exec();
        res.status(200).json(aTeams);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const newTeam = await Team.create(req.body).populate('user').exec();
        res.status(200).json(newTeam);
    } catch (error) {
        next(error)
    }
})
.put(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /team');
})
.delete(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /team');
});

teamRouter.route('/:teamId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        oTeam = await Team.findById(req.params.teamId).populate('user').exec();
        if (!oTeam) throw new Error('Team not found')
        res.status(200).json(oTeam);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /team/:teamId');
})
.put(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const oTeam = await Comment.findByIdAndUpdate(req.params.teamId, {$set: req.body}, { new: true });
        if (!oTeam) throw new Error(`Team not found for id ${req.params.teamId}`);
        res.json(200, oTeam);
    } catch (error) {
        next(error);
    }
})
.delete(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const response = await Team.findByIdAndDelete(req.params.teamId)
        res.status(200).json({_id: response._id});
    } catch (error) {
        next(error);
    }
});

module.exports = teamRouter;