var mysql     =    require('mysql');
var fs = require('fs');

creds = JSON.parse(fs.readFileSync('creds.json', 'utf8'));

function db_init() {
  var db_communicator = {

    pool: mysql.createPool(creds),

    handle_database: function(req,res) {
      
      this.pool.getConnection(function(err,connection){
        if (err) {
          console.log('here1');
          connection.release();
          return {"code" : 100, "status" : "Error in connection database"};
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from Course",function(err,rows){
          console.log('here2');
          connection.release();
          if(!err) {
            return rows;
          }           
        });

        connection.on('error', function(err) {      
          console.log('here3');
          return {"code" : 100, "status" : "Error in connection database"};     
        });
      });
    }
  }
  return db_communicator;
}
module.exports = db_init = db_init;