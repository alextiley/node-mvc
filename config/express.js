var express = require('express'),
	mongoStore = require('connect-mongo')(express),
	pkg = utils.include('/package.json');

module.exports = function (app) {

	// Development-specific configuration
	app.configure('development', function () {
		
		// Development logging
		app.use(express.logger('dev'));

		// Pretty print HTML output
		app.locals.pretty = true;
	});

	// Sets the favicon path (default is an express favicon)
	app.use(express.favicon(app.get('paths').assets + 'img/favicon.ico')); 

	// Set .jade as the default template extension
	app.set('view engine', 'jade');

	// Tell express where to look for view components
	app.set('views', app.get('paths').views);

	// Expose package.json to views
	app.use(function (request, response, next) {
		app.locals.pkg = pkg;
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

	// Set the assets path
	app.use(express.static(app.get('paths').assets));

	/*
	// Include common method, invoked on all route requests - might be useful in the future?
	app.all('*', function (request, response, next) {
		utils.include(app.get('paths').controllers + 'common/common')(request, response, app);
		next();
	});
	*/

	// Allows mounting of roots
	app.use(app.router);

	// Route 404 response codes to a proper template
	app.use(function(request, response, next) {
		response.status(404).render('404', {
			url: utils.getAbsoluteUrl(request),
			page: 'not_found'
		});
	});

	// Route 500 response codes to a proper template
	app.use(function(error, request, response, next) {
		response.status(500).render('500', {
			url: utils.getAbsoluteUrl(request),
			error: error.stack,
			page: 'server_error'
		});

	});

};