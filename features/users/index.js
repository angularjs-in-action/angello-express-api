var express    = require('express'),
    _          = require('lodash'),
    User       = require('./user');



var app = module.exports = express.Router();

app.get('/', function(req, res) {
  User.find({userId: req.user.sub}).exec().then(function(users) {
    res.status(200).send(users);
  }, function(error) {
    res.status(400).send(err);
  });
});

app.get('/:id', function(req, res) {
  User.findOne({_id: req.params.id, userId: req.user.sub}, function(err, user){
      if (err) {
        res.status(400).send(err);
      } else if (!user) {
        res.status(404).send(err);
      } else {
        res.status(200).send(user);
      }
  });
});

app.put('/:id', function(req, res) {
  User.update({_id: req.params.id, userId: req.user.sub}, _.omit(req.body, '_id'), function(err, user){
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(req.body);
      }
  });
});

app.delete('/:id', function(req, res) {
  User.remove({_id: req.params.id, userId: req.user.sub}, function(err, user){
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(req.body);
      }
  });
});

app.post('/', function(req, res) {
    var user = new User(_.extend(req.body, {
      userId: req.user.sub
    }));
    user.save(function(err, newUserCreated) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(newUserCreated);
      }
    });
});
