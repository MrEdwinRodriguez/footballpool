const express = require('express');
const weekRouter = express.Router();
const Week = require('../models/week');
const Profile = require('../models/profile');
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
		const urlOverFlow = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=${parseInt(req.params.year)+1}`;
		const response = await fetch(url);
		const responseOverflow = await fetch(urlOverFlow); //gets scheduled games in January
		const jsonResponse = await response.json();
		const jsonResponseOverflow = await responseOverflow.json();
		jsonResponse.events = jsonResponse.events.concat(jsonResponseOverflow.events);
		// console.log(jsonResponse);
		const weeks = {};
		jsonResponse.events.forEach(event => {
			if (new Date(event.date) > new Date(`08/01/${req.params.year}`) && event.season && event.season.slug == "regular-season") {
				let competition = null;
				if (Array.isArray(event.competitions) && event.competitions.length > 0) {
					competition = event.competitions[0];
				}
				const homeTeam = competition.competitors.find(competitor => competitor.homeAway === "home");
				const visitingTeam = competition.competitors.find(competitor => competitor.homeAway === "away");
				if (weeks[event.week.number]) {
					weeks[event.week.number].push({
						name: event.name,
						shortName: event.shortName,
						date: new Date(event.date),
						venue: competition.venue.full_name,
						city: competition.venue.address.city,
						state: competition.venue.address.state,
						home: homeTeam.team.id,
						visitor: visitingTeam.team.id,
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
							home: homeTeam.team.id,
							visitor: visitingTeam.team.id,
						}
					]
				}
				
			}
		})
		const orderedWeeks = [];
		for (let i=1; i<=18; i++) { //18 weeks of season
			orderedWeeks.push({
				week: i,
				league: 'NFL',
				year: req.params.year, 
				in_playoffs: false,
				competitions: weeks[i]
			});
		}
		for (const week of orderedWeeks) {
			await Week.create(week);
		}
		res.json(orderedWeeks);
    } catch (error) {
        next(error)
    }
})

module.exports = weekRouter;