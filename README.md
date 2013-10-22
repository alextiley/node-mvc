
node-mvc
=========

A boiletplate for developing MVC applications with node js.

* For configuration, app.set('myVariable', 'myValue') translates to #{settings.myVariable} in a template
* ...to retrieve this within the application, app.get('myVariable') should be used
* You can also set object: app.set('myObject', {'key': 'value'})
* ...retrieved like: app.get('myObject').key or in a template: #{myObject.key}

* To pass data from a controller, app.locals.var = 'value' is the way to go.
* That's accessed in the template like so: #{var}
* It's also possible to set multiple variables in one go:
* app.locals({var1: 'value1', var2: 'value2'});

* Request params are done like this:
* request.params.page

* Redirecting a response:
* response.redirect('/some/path');

* Send a JSON response:
* response.json({...})
