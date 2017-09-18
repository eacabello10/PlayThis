var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
<<<<<<< HEAD
var url = process.env.MONGODB;
=======
var url = 'mongodb://edotest:edotest@ds036967.mlab.com:36967/playthis-db';
>>>>>>> master

router.get('/', getRequest);

function getRequest(req, res, next) {
	getInfoConsoles((info) => {
		var arregloGames = info[0].games.map((game) => {return "Name: " + game.name + ", " + "Launch Date: " + game.launchdate + ", " + "Exclusive: " + game.exclusive + ", " +"Genres: " + game.genre + ", " + "Aproximate Duration: " + game.aproxDuration + ", " + "Multiplayer: " + game.multiplayer + "."});
		res.render('consoles', { title: 'Consoles',
  		id: info[0].id,
  		name: info[0].name,
  		aliases: info[0].aliases,
  		games: arregloGames,
  		type: info[0].type
		}
		);
	});  
}

function getInfoConsoles(callback){
	MongoClient.connect(url, function(err, db){
  		var consoles = db.collection("consolessCollection");
  		consoles.find({}).toArray((err2, consoles) =>{
  		callback(consoles);
  		});
	});
}


module.exports = router;