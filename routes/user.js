module.exports = function(app, db) {
	app.get('/user/:user_id', function (req, res, next) {
		var query = "select * from User where user_id=\""+req.params['user_id']+"\""
		db.query(query, function (err, rows) {
			if (err) return next(err);
			res.json(rows);
		});
	});
}