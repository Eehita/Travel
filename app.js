/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

var express = require('express');
var cfenv = require('cfenv');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ideasController = require('./server/controllers/ideas-controller');

mongoose.connect('mongodb://localhost:27017/Final');
//mongoose.connect('mongodb://0bc2b66d-60ee-4539-8792-89d243c305da:e5fbef2c-d762-4733-b3d9-da1e3afebe63@50.23.230.149:10172/db');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

var appEnv = cfenv.getAppEnv();

// Connection URL 
//var url = 'mongodb://0bc2b66d-60ee-4539-8792-89d243c305da:e5fbef2c-d762-4733-b3d9-da1e3afebe63@50.23.230.149:10172/db';
//var url = 'mongodb://localhost:27017/Travel';

//REST API
app.get('/api/ideas', ideasController.list);
app.post('/api/ideas', ideasController.create);


app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
