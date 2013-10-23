
module.exports.controller = function (app) {

	app.get(/^(\/|\/home)$/, function (request, response) {
		app.locals.page = 'home';
		response.render('home');
	});

};