var app = require('express')();

// Set some globals
global.env = process.env.NODE_ENV || 'development';
global.baseDir = __dirname;

// Invoke environment specific configuration
require(global.baseDir + '/config/app')[env](app);

// Application utility methods
require('./utils/app')(app);

// Express.js settings
utils.include('express', app.get('paths').config)(app);

// Bootstrap the controllers
utils.include('routes', app.get('paths').config)(app);

// Start the application
app.listen(app.get('server').port);