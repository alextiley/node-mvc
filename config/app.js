
module.exports = {
	
	development: function (app) {
		
		app.set('server', {
			port: 3000
		});

		app.set('cookies', {
			secret: 'i-love-cookies'
		});

		app.set('db', {
			url: 'mongodb://localhost/blog',
			username: 'blog',
			password: 'password'
		});

		app.set('paths', {
			controllers: global.baseDir + '/controllers/',
			config: global.baseDir + '/config/',
			models: global.baseDir + '/models/',
			assets: global.baseDir + '/www/',
			views: global.baseDir + '/views/',
			utils: global.baseDir + '/utils/',
			root: global.baseDir + '/'
		});

	},
	staging: function (app) {},
	production: function (app) {}
};