var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/play-this-db';

/* GET home page. */
router.get('/', getRequest);

function getRequest(req, res, next) {
	getInfo((info) => {
		res.render('index', { title: 'Express',
  		id: info[0].id,
  		name: info[0].name,
  		bio: info[0].biography
		}
		);
	console.log(info);
	});  
}

function getInfo(callback){
	MongoClient.connect(url, function(err, db){
  		var users = db.collection("usersCollection");
  		users.find({id:123}).toArray((err2, users) =>{
  		callback(users);
  		});
	});
}

module.exports = router;
