var query = require('./query');
var review = require('./review');
var errors = require('./errors');

module.exports = function(app, db) {
	query(app, db);

	review(app, db);

	errors(app, db);
}