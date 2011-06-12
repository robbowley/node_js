var http = require("http");
console.log(require.paths);
console.log("Hello world");

var server = http.createServer(function(request, response) {

    //http://search.twitter.com/search.atom?q=spa2011          
    var options = {
        host: 'search.twitter.com',
        port: 80,
        path: '/search.json?q=spa2011'
    };

    http.get(options, function(res) {
        console.log("Got response: " + res.statusCode);

        res.on('data', function(d) {
            response.writeHeader(
            200, {
                "content-type": "text/plain"
            });

          
            response.write(d);
       
            response.end();
        });
        output = res;
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });



});

server.listen(8080);

