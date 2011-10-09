
// include template module
var Template = require('./index.js').Template;

// load a file synchroneously
var tpl = Template(__dirname + '/test.template.tpl');

// ouput the results 
console.log( tpl({foo: 5}) );
