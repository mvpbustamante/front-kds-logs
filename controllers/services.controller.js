
var express = require('express');
var router = express.Router();
var servicesService = require('../services/services.service');


router.get('/getLogLevelCounts', getLogLevelCounts);
router.get('/getTopHostNames', getTopHostNames);
router.get('/getTopLogs', getTopLogs);

module.exports = router;


function getLogLevelCounts(req, res) {

	servicesService.getLogLevelCounts()
		.then(function(data) {
			if (data)
				res.send(data);
			else
				res.sendStatus(404);

		})
		.catch(function(err) {
			res.status(400).send(err);
		});
}

function getTopHostNames(req, res) {
	
	servicesService.getTopHostNames()
		.then(function(data) {
			if (data)
				res.send(data);
			else
				res.sendStatus(404);

		})
		.catch(function(err) {
			res.status(400).send(err);
		});
}

function getTopLogs(req, res) {
	
	servicesService.getTopLogs()
		.then(function(data) {
			if (data)
				res.send(data);
			else
				res.sendStatus(404);

		})
		.catch(function(err) {
			res.status(400).send(err);
		});
}
