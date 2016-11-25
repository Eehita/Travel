var mongoose = require('mongoose');

module.exports = mongoose.model('Idea', {
  name: String,
  description: String
});