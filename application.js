
// Scopes globals, config, utils 
require('./utils');

var mongo = utils.include('mongoose'),
	app = utils.include('express')();

// Bootstrap database connection
mongo.connect(config.db.url);

// Express.js settings
utils.include(config.paths.config + 'express')(app);

// Bootstrap the controllers
utils.include(config.paths.config + 'routes')(app);

// Start the application
app.listen(config.server.port);