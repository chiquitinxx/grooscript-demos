var Client = require('node-rest-client').Client;

client = new Client();

// direct way
client.get("http://localhost:3000/authors", {
    //data: { test: "hello" }
    headers:{"Content-Type": "application/json", "User-Agent": "Firefox"}
}, function(data, response){
    // parsed response body as js object
    console.log(data.toString());
    //console.log(JSON.parse(data));
    // raw response
    //console.log(response);
});

/*var restful = require('restful.js');

var api = restful('localhost');
//.header('AuthToken', 'test') // set global header
//.prefixUrl('v1')
//.protocol('https')
api.port(3000);

var authorMember = api.one('authors', 1);
authorMember.get().then(function(response) {
    var articleEntity = response.body();

    var author = articleEntity.data();
    console.log(author);
}, function(response) {
    console.log("Error: "+response);
});*/