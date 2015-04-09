// app/routes.js

module.exports = function(app, db) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/initialize', function(req, res) {
    db.query("select * from main_categories",function(err,rows){
      if (!err) res.json(rows); // return all nerds in JSON format          
      else console.log("you need to run \. "+__dirname+"/../create_main_categories.sql");
    });
  });

  app.get('/col1/:Category', function(req, res) {
    var query = "select distinct(c.name) from (Category c) where c.c_bid in (select c_bid from Category where name=\"" + req.params.Category + "\") and c.name not in (select main_category from main_categories)"
    db.query(query,function(err,rows){
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
    var query = "select b.name,b.city,b.state,b.business_id from (Business b) where ";
    attrs = req.body['all_attrs'];
    categories = req.body['categories'];
    schedule = req.body['schedule'];

    console.log(attrs);

    if (attrs.length === 0) {
      res.json({});
      return;
    }

    for (each in attrs) {
      query += "b.business_id in (select a_bid from Attributes where attr_key=\"" + attrs[each] + "\") and "
    }
    for (each in categories) {
      query += "b.business_id in (select c_bid from Category where name=\"" + categories[each] + "\") and "
    }
    if (schedule["day"] != "" && schedule["open"] != "" && schedule["close"] != "") {
      query += "b.business_id in (select h_bid from Days_of_Week where day=\""+schedule["day"]+"\" and open<=\""+schedule["open"]+"\" and close>=\""+schedule["close"]+"\") and "
    }
    query = query.substring(0,query.length-5);

    console.log("\n\n" + query);
    db.query(query, function(err,rows){
      if (!err) {
        res.json(rows);
      }
    });
  });
};