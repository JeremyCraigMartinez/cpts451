// app/routes.js

module.exports = function(app, db) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/query', function(req, res) {
    db.query("select * from Course",function(err,rows){
      if(!err) {
        res.json(rows); // return all nerds in JSON format
      }           
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};