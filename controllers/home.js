
module.exports.controller = function (app) {

	app.get(/^(\/|\/home)$/, function (request, response) {
		response.render('home');
	});

};