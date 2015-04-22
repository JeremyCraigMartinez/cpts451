var query = require('./query');
var review = require('./review');
var errors = require('./errors');
var user = require('./user');

module.exports = function(app, db) {
	query(app, db);

	review(app, db);

	user(app, db);

	errors(app, db);
}