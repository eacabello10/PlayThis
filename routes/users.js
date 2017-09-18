var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mongodb = require('mongodb');

var url = "mongodb://edotest:edotest@ds036967.mlab.com:36967/playthis-db";

/* GET users listing. */
router.post('/auth/signup', register);
router.post('/auth/login', login);
router.post("/user/", loginRequired, hello)

function register(req, res){
  var newUser = req.body;
  console.log(newUser);
  newUser.password = bcrypt.hashSync(newUser.password, 10);
  mongodb.connect(url, (err, db) => {
    db.collection("users").find({"username" : newUser.username}).toArray((anError, userDocs) => {
      console.log(userDocs);
      if(userDocs.lenght == 0){
        db.collection("users").insertOne(newUser, (dbError, dbRes) =>{
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
  mongodb.connect(url, (err, db) => {
    db.collection("users").find({"username" : userLogin.username}).limit(1).toArray((anError, userDocs) => {
      if(userDocs.lenght == 0){
        db.close();
        res.status(401).json({ message: 'Authentication failed. User not found.' });
      } else {
        if(!comparePassword(userLogin.password, userDocs[0].password)){
          db.close();
          res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
          db.close();
          return res.json({token: jwt.sign({ email: userLogin.email, fullName: userLogin.fullName, _id: userLogin._id}, 'RESTFULAPIs')});
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
