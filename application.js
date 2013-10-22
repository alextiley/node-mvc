var mongo = require('mongoose'),
	app = require('express')();

// Scopes globals, config, utils 
require('./utils')(app);

// Bootstrap database connection
mongo.connect(app.get('db').url);

// Express.js settings
utils.include('express', app.get('paths').config)(app);

// Bootstrap the controllers
utils.include('routes', app.get('paths').config)(app);

// Start the application
app.listen(app.get('server').port);