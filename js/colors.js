var fs = require('fs');
var gs = require('grooscript'); //<1>

eval(fs.readFileSync('js/JsColors.js')+''); //<2>
eval(fs.readFileSync('js/NodeJs.js')+''); //<2>
eval(fs.readFileSync('js/Execute.js')+''); //<2>


