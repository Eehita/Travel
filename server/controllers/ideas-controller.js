var Idea = require('../models/idea');

module.exports.create = function (req, res) {
  var idea = new Idea(req.body);
  idea.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Idea.find({}, function (err, results) {
    res.json(results);
  });
}
