module.exports = function(app, db) {
	app.get('/business/:business_id', function (req, res, next) {
		var query = "select * from Review where r_bid=\""+req.params["business_id"]+"\""
		console.log(query);
		db.query(query, function (err, rows) {
			if (err) return next(err);
			res.json(rows);
		});
	});
}