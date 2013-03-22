var http = require("http");
var start = 1;
var end = 65535;

for(var port=start; port<=end; port++)
{
	http.createServer(function(request, response)
	{
		response.write("open");
		response.end();
	}).listen(port);
}
