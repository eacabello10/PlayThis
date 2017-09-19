var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://edotest:edotest@ds036967.mlab.com:36967/playthis-db';

/* GET home page. */
router.get('/', getRequest);
//El codigo es modular, esta bien organizado
function getRequest(req, res, next) {
	getInfo((info) => {
		res.render('index', { title: 'Express',
  		id: info[0].id,
  		name: info[0].name,
  		bio: info[0].biography
		}
		);
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
