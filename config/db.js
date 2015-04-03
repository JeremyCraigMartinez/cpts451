var mysql = require('mysql');
var fs = require('fs');
var q = require('q');

creds = JSON.parse(fs.readFileSync('creds.json', 'utf8'));

var deferred = q.defer()

pool = mysql.createPool(creds);

pool.getConnection(function(err,connection) {
  if (err) {
    connection.release();
    deferred.reject();
  }

  deferred.resolve(connection);

  connection.on('error', function(err) {   
    deferred.reject();
  });  
})

module.exports = deferred.promise;