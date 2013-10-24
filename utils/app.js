module.exports = function (app) {
	
	global.utils = global.util || {};

	/*	
	 *	Use an absolute path to search for project modules
	 *	Fallback to node modules
	 *	file: the file to include
	 *	basePath: optional, a path to prepend to the file name
	 */
	global.utils.include = function (file, basePath) {
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
	};

	/*	
	 *	Scope constants to the global namespace
	 *  Used as a shortcut; usage: utils.constants.MY_CONSTANT
	 */
	global.utils.constants = global.utils.include('constants', app.get('paths').utils);

	/*	
	 *	Get the current absolute URL
	 *  request: the request object
	 */
	global.utils.getAbsoluteUrl = function (request) {
		return request.protocol + '://' + request.get('host') + request.url;
	};

	/*	
	 *	Get the current absolute directory path
	 *	path: the path to make absolute
	 */
	global.utils.getAbsolutePath = function (path) {
		return global.baseDir + path;
	};

	/*	
	 *	Includes a model module
	 *	model: the name of the module to include
	 */
	global.utils.getModel = function (model) {
		return global.utils.include(model, app.get('paths').models);
	};

};