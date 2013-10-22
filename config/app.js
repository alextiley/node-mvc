var path = require('path');

module.exports = {
	development: {
		server: {
			port: 3000
		},
		cookies: {
			secret: 'my-secret'
		},
		db: {
			url: 'mongodb://localhost/my-database',
			username: 'username',
			password: 'password'
		},
		paths: {
			controllers: global.baseDir + '/controllers/',
			config: global.baseDir + '/config/',
			models: global.baseDir + '/models/',
			assets: global.baseDir + '/www/',
			views: global.baseDir + '/views/',
			root: global.baseDir + '/'
		}
	},
	staging: {},
	production: {}
};