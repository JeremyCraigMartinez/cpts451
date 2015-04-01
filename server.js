var express = require('express');
var app = express();
var db_communicator = require('./db');
var cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname+"/views");

app.get('/', function (req, res) {
	var obj = db_communicator();
	obj.handle_database(req,res);
	res.render('index', {'name' : "Swig"});
});

app.get('*', function (req, res) {
	res.send('This is not the page you are looking for');
});

app.listen(8080);
console.log("Express server has started");