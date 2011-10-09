
// include template module
var Template = require('./index.js').Template;


// this is the heredoc antipattern
var heredoc = function () { /*

<h1>This is a heredoc.</h1>

<ul>
	<li>Typeof foo: <% print(typeof foo); %></li>
	<li>Value of foo is: <%=foo%></li>
	<li>Expression foo &gt; 4: <% print(parseInt(foo) > 4); %></li>
</ul>

*/ };

// turn the heredoc into a template function
var tpl = Template(heredoc);

// ouput the results 
console.log( tpl({foo: 5}) );
