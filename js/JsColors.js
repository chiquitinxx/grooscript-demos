//Grooscript converted file
JsColors = function() {};
JsColors.gSaT = function(target) {
  target.red = function(x0, x1) { return JsColors.red(target, x0, x1); };
  target.bold = function(x0, x1) { return JsColors.bold(target, x0, x1); };
  target.grey = function(x0, x1) { return JsColors.grey(target, x0, x1); };
  target.rainbow = function(x0, x1) { return JsColors.rainbow(target, x0, x1); };
};
JsColors.red = function($self, msg) {
  console.log(msg.red);
}
JsColors.bold = function($self, msg) {
  console.log(msg.bold);
}
JsColors.grey = function($self, msg) {
  console.log(msg.grey);
}
JsColors.rainbow = function($self, msg) {
  console.log(msg.rainbow);
}
