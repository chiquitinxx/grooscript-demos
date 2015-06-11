var fs = require('fs');
var gs = require('grooscript');
var Rx = require('rx');

eval(fs.readFileSync('js/GrooscriptObservable.js')+'');
eval(fs.readFileSync('js/observeRx.js')+''); //<2>


