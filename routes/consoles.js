var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/play-this-db';

router.get('/', function(req, res, next) {
	getInfoConsoles((info) => {
		res.render('consoles', { title: 'Consoles',
  		id: info[0].id,
  		name: info[0].name,
  		aliases: info[0].aliases
		}
		);
	console.log(info);
	});  
});

function getInfoConsoles(callback){
	MongoClient.connect(url, function(err, db){
  		var consoles = db.collection("consolesCollection");
  		consoles.find({}).toArray((err2, consoles) =>{
  		callback(consoles);
  		});
	});
}

module.exports = router;