
// include template module
var Template = require('./index.js').Template;

// load a file asynchroneously
var tpl = Template(__dirname + '/test.template.tpl', function (err, tpl) {
	
	// first argument is null or an error object
	if (err) throw err;
	
	// ouput the results 
	console.log( tpl({foo: 5}) );
});


