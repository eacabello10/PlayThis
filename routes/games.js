var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var url = 'mongodb://edotest:edotest@ds036967.mlab.com:36967/playthis-db';

function getGames(callback){
	mongodb.connect(url, (err,db) => {
	if(err) throw err;

	var games = db.collection("gamesCollection");

	games.find({}).toArray((err2, games) => {
		if(err2) throw err2;

		callback(games);
		});
	});
}

router.get('/', function(req, res) {
	getGames((games) => {
		res.json(games);
	});
});



module.exports = router;