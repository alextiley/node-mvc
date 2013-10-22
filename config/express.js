var express = require('express'),
	mongoStore = require('connect-mongo')(express),
	pkg = utils.include('/package.json'),
	path = require('path');

module.exports = function (app) {

	// Development-specific configuration
	app.configure('development', function () {
		
		// Development logging
		app.use(express.logger('dev'));

		// Pretty print HTML output
		app.locals.pretty = true;
	});

	// Set .jade as the default template extension
	app.set('view engine', 'jade');

	// Tell express where to look for view components
	app.set('views', app.get('paths').views);

	// Expose package.json to views
	app.use(function (request, response, next) {
		response.locals.pkg = pkg;
		next();
	});

	// Automatically parse request bodies
	app.use(express.bodyParser());

	// Allow HTTP method overrides (using _method hidden input)
	app.use(express.methodOverride());

	// Parse and populate cookie data to request.cookies
	app.use(express.cookieParser());

	// Provides cookie-based sessions with mongo storage
	app.use(express.session({
		secret: app.get('cookies').secret,
		store: new mongoStore({
			url: app.get('db').url
		})
	}));

	// Allows mounting of roots
	app.use(app.router);

	// Set the assets path
	app.use(express.static(app.get('paths').assets));

	// Route 404 response codes to a proper template
	app.use(function(request, response, next){
		response.status(404).render('404', {
			url: utils.getAbsoluteUrl(request)
		});
	});

	// Route 500 response codes to a proper template
	app.use(function(error, request, response, next){
		response.status(500).render('500', {
			url: utils.getAbsoluteUrl(request),
			error: error.stack
		});
	});

};