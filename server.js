var http= require("http");

var server=http.createServer(function(req, res){
	res.writeHead(200,{"Content-Type" : "text/plain"});
	res.end("Hai Sangamesh Welcome")
})

server.listen(8081,function(){
	console.log("Running");
});