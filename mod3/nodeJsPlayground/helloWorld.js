var sys = require("sys");
my_http = require("http");
my_http.createServer(function(request,response){
  sys.puts("I got kicked");
  response.writeHeader(200, {"Content-Type": "text/plain"});
  response.write("hello world");
  response.end();
}).listen(8080);
sys.puts("server Running on 8080");

my_http.createServer(function(request, response){}).listen(8080); 