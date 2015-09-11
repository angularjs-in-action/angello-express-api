var express    = require('express'),
    _          = require('lodash'),
    Story      = require('./story');



var app = module.exports = express.Router();

app.get('/', function(req, res) {
  Story.find({userId: req.user.sub}).exec().then(function(stories) {
    res.status(200).send(stories);
  }, function(error) {
    res.status(400).send(err);
  });
});

app.get('/:id', function(req, res) {
  Story.findOne({_id: req.params.id, userId: req.user.sub}, function(err, story){
      if (err) {
        res.status(400).send(err);
      } else if (!story) {
        res.status(404).send(err);
      } else {
        res.status(200).send(story);
      }
  });
});

app.put('/:id', function(req, res) {
  Story.update({_id: req.params.id, userId: req.user.sub}, _.omit(req.body, '_id'), function(err, story){
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(req.body);
      }
  });
});

app.delete('/:id', function(req, res) {
  Story.remove({_id: req.params.id, userId: req.user.sub}, function(err, story){
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(req.body);
      }
  });
});

app.post('/', function(req, res) {
    var story = new Story(_.extend(req.body, {
      userId: req.user.sub
    }));
    story.save(function(err, newStoryCreated) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(newStoryCreated);
      }
    });
});
