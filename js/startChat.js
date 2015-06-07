var fs = require('fs');
var gs = require('grooscript');

eval(fs.readFileSync('src/main/webapp/js/grooscript-tools.js')+'');
eval(fs.readFileSync('src/main/webapp/js/gstemplates.js')+'');
eval(fs.readFileSync('js/NodeServer.js')+'');
eval(fs.readFileSync('js/startServer.js')+'');