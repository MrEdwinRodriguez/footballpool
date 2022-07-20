const express = require('express');
const typeRouter = express.Router();
const Type = require('../models/type');
const {verifyUser} = require('../authenticate')

typeRouter.route('/')
.get(async (req, res, next) => {
    try {
        const aTypes = await  Type.find().populate('user').exec();
        res.status(200).json(aTypes);
    } catch (error) {
        next(error)
    }
})
.post(verifyUser, async (req, res, next) => {
    try {
        const newType = await  Type.create(req.body).populate('user').exec();
        res.status(200).json(newType);
    } catch (error) {
        next(error)
    }
})
.put(async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /type');
})
.delete( async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /type');
});

typeRouter.route('/:typeId')
.get(async (req, res, next) => {
    try {
        oType = await Type.findById(req.params.typeId).populate('user').exec();
        if (!oType) throw new Error('Team not found')
        res.status(200).json(oType);
    } catch (error) {
        next(error)
    }
})
.post(async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /team/:typeId');
})
.put(verifyUser, async (req, res, next) => {
    try {
        const oType = await Comment.findByIdAndUpdate(req.params.typeId, {$set: req.body}, { new: true });
        if (!oType) throw new Error(`Team not found for id ${req.params.typeId}`);
        res.json(200, oType);
    } catch (error) {
        next(error);
    }
})
.delete(verifyUser, async (req, res, next) => {
    try {
        const response = await Type.findByIdAndDelete(req.params.typeId)
        res.status(200).json({_id: response._id});
    } catch (error) {
        next(error);
    }
});

module.exports = typeRouter;