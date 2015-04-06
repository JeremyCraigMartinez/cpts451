// app/routes.js

module.exports = function(app, db) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/initialize', function(req, res) {
    db.query("select * from main_categories",function(err,rows){
      if(!err) {
        res.json(rows); // return all nerds in JSON format
      }           
    });
  });

  app.get('/col1/:Category', function(req, res) {
    db.query("select distinct(c.name) from (Category c) where c.c_bid in (select c_bid from Category where name=\"" + req.params.Category + "\") and c.name not in (select main_category from main_categories)",function(err,rows){
      if(!err) {
        res.json(rows); // return all nerds in JSON format
      }           
    });
  });

  app.post('/col2', function(req, res) {
    if (req.body.length === 0) {
      res.json({});
      return;
    }
    var query = "select distinct(attr_key) from Attributes where ";
    for (each in req.body) {
      query += "a_bid in (select c_bid from Category where name=\"" + req.body[each] + "\") and "
    }
    db.query(query.substring(0,query.length-5), function(err,rows){
      if (!err) {
        res.json(rows);
      }
    })
  });

  app.post('/col3', function(req, res) {
    var query = "select b.name,b.city,b.state from (Business b) where ";
    for (each in req.body) {
      query += "b.business_id in (select a_bid from Attributes where attr_key=\"" + req.body[each] + "\") and "
    }
    db.query(query.substring(0,query.length-5), function(err,rows){
      if (!err) {
        res.json(rows);
      }
    })
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};