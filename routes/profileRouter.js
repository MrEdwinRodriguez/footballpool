const express = require('express');
const profileRouter = express.Router();
const Profile = require('../models/profile');
const {verifyUser} = require('../authenticate')
const cors = require('./cors');

profileRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        const aProfiles = await  Profile.find().populate('user').exec();
        res.status(200).json(aProfiles);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const newProfile = await  Profile.create(req.body).populate('user').exec();
        res.status(200).json(newProfile);
    } catch (error) {
        next(error)
    }
})
.put(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /profile');
})
.delete(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /profile');
});

profileRouter.route('/:profileId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        oProfile = await Profile.findById(req.params.profileId).populate('user').exec();
        if (!oProfile) throw new Error('Profile not found')
        res.status(200).json(oProfile);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /profile/:profileId');
})
.put(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const oProfile = await Comment.findByIdAndUpdate(req.params.profileId, {$set: req.body}, { new: true });
        if (!oProfile) throw new Error(`Profile not found for id ${req.params.profileId}`);
        res.json(200, oProfile);
    } catch (error) {
        next(error);
    }
})
.delete(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const response = await Profile.findByIdAndDelete(req.params.profileId)
        res.status(200).json({_id: response._id});
    } catch (error) {
        next(error);
    }
});

module.exports = profileRouter;