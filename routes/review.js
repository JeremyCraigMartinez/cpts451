module.exports = function(app, db) {
	app.get('/business/:business_id', function (req, res, next) {
		var query = "select r.review_date,r.stars,r.review_text,r.votes_useful,u.name from (Review r, User u) where r_bid=\""+req.params["business_id"]+"\" and u.user_id=r.r_uid"
		db.query(query, function (err, rows) {
			if (err) return next(err);
			res.json(rows);
		});
	});
}