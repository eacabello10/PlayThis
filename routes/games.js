var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/play-this-db';

router.get('/', getRequest(req,res,next));

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

function getInfoGames(callback){
	MongoClient.connect(url, function(err, db){
  		var games = db.collection("gamesCollection");
  		games.find({}).toArray((err2, games) =>{
  		callback(games);
  		});
	});
}

module.exports = router;