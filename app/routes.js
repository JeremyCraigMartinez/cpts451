// app/routes.js

module.exports = function(app, db) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/col1/:Category', function(req, res) {
    db.query("select distinct(c.name) from (Category c) where c.c_bid in (select c_bid from Category where name=\"" + req.params.Category + "\") and c.name not in (select main_category from main_categories)",function(err,rows){
      if(!err) {
        res.json(rows); // return all nerds in JSON format
      }           
    });
  });

  app.get('/col2/:Category', function(req, res) {
    db.query("select distinct(c.name) from (Category c) where c.c_bid in (select c_bid from Category where name=\"" + req.params.Category + "\") and c.name not in (select main_category from main_categories)",function(err,rows){
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