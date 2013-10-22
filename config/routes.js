var fs = require('fs'),
	route;

module.exports = function (app) {

	fs.readdirSync(app.get('paths').controllers).forEach(function (file) {
		if (file.substr(-3) === '.js') {
			route = utils.include(file, app.get('paths').controllers);
			route.controller(app);
		}
	});

};