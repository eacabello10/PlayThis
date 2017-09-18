var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://edotest:edotest@ds036967.mlab.com:36967/playthis-db';

router.get('/', getRequest);

function getRequest(req, res, next) {
	getInfoGames((info) => {
		res.render('games', { title: 'Games',
  		id: info[0].id,
  		name: info[0].name,
  		launchdate: info[0].launchdate
		}
		);
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