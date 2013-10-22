global.env = process.env.NODE_ENV || 'development';

global.baseDir = __dirname;

global.config = require(global.baseDir + '/config/app')[env];

global.utils = {
	/*	
	 *	Use an absolute path to search for project modules
	 *	Fallback to node modules
	 *	file: the file to include
	 *	basePath: optional, a path to prepend to the file name
	 */
	include: function (file, basePath) {

		var inc;

		try {

			if (basePath === undefined) {
				basePath = global.baseDir + '/';
			}

			inc = require(basePath + file);

		} catch (exception) {
			inc = require(file);
		}

		return inc;
	},
	/*	
	 *	Get the current absolute URL
	 *  request: the request object
	 */
	getAbsoluteUrl: function (request) {
		return request.protocol + '://' + request.get('host') + request.url;
	},
	/*	
	 *	Get the current absolute directory path
	 *	path: the path to make absolute
	 */
	getAbsolutePath: function (path) {
		return global.baseDir + path;
	},
	/*	
	 *	Includes a model module
	 *	model: the name of the module to include
	 */
	getModel: function (model) {
		return global.utils.include(model, global.config.paths.models);
	}
};