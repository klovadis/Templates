# Simple template wrapper for NodeJS

This small module is a wrapper for [John Resig's](http://ejohn.org/) simple template so you can use it comfortably in NodeJS. 

## Template syntax

The syntax within your templates is simple and limited. Variables are replaced using `<%=VariableName%>` and you can throw in JavaScript code using `<% /* code here */ %>`:

    Replace foo: <%=foo%>
    
    JavaScript code: 
        <% if (foo) { %>
            foo is true.
        <% } else { %>
            foo is false.
        <% } %>

Of course this is against everything that you have considered good practice, but it does allow quick and dirty rapid development.

## Usage

Using the wrapper is simple. `require` the file; The `Template` export function does all your work and returns a function, which will act as your template.

    // require the template module
    var Template = require('index.js').Template;

    // if you already have the code
    var myTemplateCode = 'Template code here';
    var myTemplate = Template(myTemplateCode);


    // if you stored your code in a file, you can
    // either load the contents synchroneously or
    // asynchroneously.
    
    // synchroneous:
    var myTemplate = Template('/path/to/file');
    
    // asynchroneous:
    Template('/path/to/file', function (err, myTemplate) {
        // myTemplate holds the template function
    });  
    
    
    // then you can use the template functions like this:
    
    // no replacement
    var output = myTemplate();
    
    // replace 'foo' with 'bar'
    var output = myTemplate({foo: 'bar'});
    
Then there is an anti-patter which you can use to work even dirtier. It is an approach to store multi-line strings in your source code by putting them as a comment into functions. It works like this:

    // require the template module
    var Template = require('index.js').Template;
    
    var myTemplateCode = function () { /*
    
        Template code goes here
    
    */ };
    
    var myTemplate = Template( myTemplateCode );
    
## LICENSE

All code is licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).