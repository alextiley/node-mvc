
module.exports.controller = function (app) {

	var doHomeAction = function (request, response) {
		response.render('home');
	};

	app.get('/', doHomeAction);
	app.get('/home', doHomeAction);
	
};