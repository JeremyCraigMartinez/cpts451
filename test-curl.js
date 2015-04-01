var http = require('http');

var user = {
	username: "Jeremy",
	password: "passwd",
	doctor: "the doc"
}

var userString = JSON.stringify(user);

var headers = {
  'Content-Type': 'application/json',
  'Content-Length': userString.length
};

var options = {
  host: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: headers
};

var req = http.request(options, function(res) {
	res.setEncoding('utf-8');

	var responseString = '';

	res.on('data', function(data) {
		console.log(data);
	});

	res.on('end', function() {
		console.log('it\'s over');
	});

	res.on('error', function(e) {
		console.log('there was an error');
	});
});

req.write(userString);
req.end();