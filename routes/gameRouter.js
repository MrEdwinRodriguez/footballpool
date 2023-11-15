const express = require('express');
const gameRouter = express.Router();
const Game = require('../models/game');
const {verifyUser} = require('../authenticate');
const cors = require('./cors');

gameRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        const aGames = await Game.find().populate('user').exec();
        res.status(200).json(aGames);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const newGame = await Game.create(req.body).populate('user').exec();
        res.status(200).json(newGame);
    } catch (error) {
        next(error)
    }
})
.put(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /game');
})
.delete(cors.corsWithOptions,  async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /game');
});

gameRouter.route('/:gameId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        oGame = await Game.findById(req.params.gameId).populate('user').exec();
        if (!oGame) throw new Error('Game not found')
        res.status(200).json(oGame);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /game/:gameId');
})
.put(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const oGame = await Game.findByIdAndUpdate(req.params.gameId, {$set: req.body}, { new: true });
        if (!oGame) throw new Error(`Game not found for id ${req.params.gameId}`);
        res.json(200, oGame);
    } catch (error) {
        next(error);
    }
})
.delete(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const response = await Game.findByIdAndDelete(req.params.gameId)
        res.status(200).json({_id: response._id});
    } catch (error) {
        next(error);
    }
});

module.exports = gameRouter;