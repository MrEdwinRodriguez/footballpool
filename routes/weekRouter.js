const express = require('express');
const weekRouter = express.Router();
const Week = require('../models/week');
const {verifyUser} = require('../authenticate');
const cors = require('./cors');
const fetch = require('node-fetch');


weekRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        const aWeeks = await Week.find().populate('user').exec();
        res.status(200).json(aWeeks);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const newWeek = await Week.create(req.body).populate('user').exec();
        res.status(200).json(newWeek);
    } catch (error) {
        next(error)
    }
})
.put(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /week');
})
.delete(cors.corsWithOptions,  async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /week');
});

weekRouter.route('/:weekId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, async (req, res, next) => {
    try {
        oWeek = await Week.findById(req.params.weekId).populate('user').exec();
        if (!oWeek) throw new Error('Week not found')
        res.status(200).json(oWeek);
    } catch (error) {
        next(error)
    }
})
.post(cors.corsWithOptions, async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /week/:weekId');
})
.put(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const oWeek = await Week.findByIdAndUpdate(req.params.weekId, {$set: req.body}, { new: true });
        if (!oWeek) throw new Error(`Week not found for id ${req.params.weekId}`);
        res.json(200, oWeek);
    } catch (error) {
        next(error);
    }
})
.delete(cors.corsWithOptions, verifyUser, async (req, res, next) => {
    try {
        const response = await Week.findByIdAndDelete(req.params.weekId)
        res.status(200).json({_id: response._id});
    } catch (error) {
        next(error);
    }
});


weekRouter.route('/schedule/:year')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.post(cors.cors, async (req, res, next) => {
    try {
		const url = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=${req.params.year}`;
		const response = await fetch(url);
		const jsonResponse = await response.json();
		// console.log(jsonResponse);
		const weeks = {};
		jsonResponse.events.forEach(event => {
			console.log(event.competitions)
			let competition = null;
			if (Array.isArray(event.competitions) && event.competitions.length > 0) {
				competition = event.competitions[0];
			}
			const homeTeam = competition.competitors.find(competitor => competitor.homeAway === "home");
			const visitingTeam = competition.competitors.find(competitor => competitor.homeAway === "away");
			console.log(event.competitions.length)
			if (weeks[event.week.number]) {
				weeks[event.week.number].push({
					name: event.name,
					shortName: event.shortName,
					date: new Date(event.date),
					venue: competition.venue.full_name,
					city: competition.venue.address.city,
					state: competition.venue.address.state,
					home: homeTeam.team.displayName,
					visitor: visitingTeam.team.displayName,
				})
			} else {

				weeks[event.week.number] = [
					{
						name: event.name,
						shortName: event.shortName,
						date: new Date(event.date),
						venue: competition.venue.full_name,
						city: competition.venue.address.city,
						state: competition.venue.address.state,
						home: homeTeam.team.displayName,
						visitor: visitingTeam.team.displayName,
						// vanue: String,
						// City: String,
						// State: String,
						// visitor: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
						// home: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
						// winner: {type: String, enum: ['visitor', 'home']},
						// visitor_score: Number,
						// home_score: Number,
						// handicap: Number,
						// favorite: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},


					}
				]
			}
		})
		res.json(weeks);
    } catch (error) {
        next(error)
    }
})

module.exports = weekRouter;