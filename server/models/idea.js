var mongoose = require('mongoose');

module.exports = mongoose.model('Idea', {
  projectName: String,
  studentName: String,
  studentEmail: String,
  projectDescription: String,
  projectURL: String
});
