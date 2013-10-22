var fs = require('fs'),
	route;

module.exports = function (app) {

	fs.readdirSync(config.paths.controllers).forEach(function (file) {
		if (file.substr(-3) == '.js') {
			route = utils.include(config.paths.controllers + file);
			route.controller(app);
		}
	});

};