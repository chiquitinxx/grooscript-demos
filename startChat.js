var fs = require('fs');
var gs = require('grooscript');

eval(fs.readFileSync('js/NodeServer.js')+'');
eval(fs.readFileSync('js/startServer.js')+'');