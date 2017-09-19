var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongodb = require('mongodb');

var url = "mongodb://jairotest:jairotest@ds036967.mlab.com:36967/playthis-db";

/* GET users listing. */
router.post('/auth/signup', register);
router.post('/auth/login', login);
router.post("/user/", loginRequired, hello)

function register(req, res){
  var newUser = req.body;
  newUser.password = bcrypt.hashSync(newUser.password, 10);
  mongodb.connect(url, (err, db) => {
    db.collection("usersCollection").find({"username" : newUser.username}).toArray((anError, userDocs) => {
      console.log(userDocs);
      if(userDocs.length === 0){
        db.collection("usersCollection").insertOne(newUser, (dbError, dbRes) =>{
          db.close();
          //res.redirect(to?);
          newUser.password = undefined;
          return res.json(newUser);
        });
      } else {
        //tell user that the username exists
        return res.status(400).send({
          message: err
        });
      }
    });
  });
}

function login(req, res) {
  var userLogin = req.body;
  var password = userLogin.password;
  var username = userLogin.username
  mongodb.connect(url, (err, db) => {
    db.collection("usersCollection").find({"username" : username}).limit(2).toArray((anError, userDocs) => {
      if(userDocs.length === 0){
        db.close();
        return res.status(401).json({ message: 'Authentication failed. User not found.' });
      } else {
        if(!comparePassword(password, userDocs[0].password)){
          db.close();
          return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
          db.close();
          return res.json({token: jwt.sign({ email: userDocs[0].username, _id: userDocs[0]._id}, 'RESTFULAPIs')});
        }
      }
    });
  });
}

function loginRequired(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

function hello(req, res){
  res.send("hello");
}

function comparePassword(password, hashPassword){
  return bcrypt.compareSync(password, hashPassword);
}

module.exports = router;
