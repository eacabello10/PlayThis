var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://jairotest:jairotest@ds036967.mlab.com:36967/playthis-db";

router.get('/', getRequest);

function getRequest(req, res, next) {
	getInfoGames((info) => {
		res.render('games', { title: 'Games',
  		id: info[0].id,
  		name: info[0].name,
  		launchdate: info[0].launchdate
		}
		);
	console.log(info);
	});  
}
=======
var mongodb = require('mongodb');
var url = 'mongodb://edotest:edotest@ds036967.mlab.com:36967/playthis-db';

function getGames(callback){
	mongodb.connect(url, (err,db) => {
	if(err) throw err;

	var games = db.collection("gamesCollection");

	games.find({}).toArray((err2, games) => {
		if(err2) throw err2;
>>>>>>> master

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