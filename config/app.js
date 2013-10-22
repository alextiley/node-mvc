var path = require('path');

module.exports = {
	
	development: function (app) {
		
		app.set('server', {
			port: 3000
		});

		app.set('cookies', {
			secret: 'my-secret'
		});

		app.set('db', {
			url: 'mongodb://localhost/my-database',
			username: 'username',
			password: 'password'
		});

		app.set('paths', {
			controllers: global.baseDir + '/controllers/',
			config: global.baseDir + '/config/',
			models: global.baseDir + '/models/',
			assets: global.baseDir + '/www/',
			views: global.baseDir + '/views/',
			root: global.baseDir + '/'
		});

	},
	staging: function (app) {},
	production: function (app) {}
};