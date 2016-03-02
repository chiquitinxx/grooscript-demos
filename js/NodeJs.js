//Grooscript converted file
function NodeJs() {
  var gSobject = gs.init('NodeJs');
  gSobject.clazz = { name: 'nodejs.NodeJs', simpleName: 'NodeJs'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.clazz.interfaces = [{ name: 'colors.JsColors', simpleName: 'JsColors'}];
  if (JsColors['setProperty']) {
    gSobject.setProperty = function(x1) { return JsColors.setProperty(gSobject,x1); }
  }
  if (JsColors['getProperty']) {
    gSobject.getProperty = function() { return JsColors.getProperty(gSobject); }
  }
  gSobject.red = function(x1) { return JsColors.red(gSobject,x1); }
  gSobject.bold = function(x1) { return JsColors.bold(gSobject,x1); }
  JsColors.$init$(gSobject);
  gSobject.rainbow = function(x1) { return JsColors.rainbow(gSobject,x1); }
  gSobject.grey = function(x1) { return JsColors.grey(gSobject,x1); }
  gSobject.module = function(name) {
    try {
            global[name] = require(name);
        } catch(err) {
            this.red('Module '+name+' not installed, please install it.');
        }
  }
  gSobject['countBodyChars'] = function(url) {
    var time = gs.date();
    gs.mc(this,"grey",["  Going " + (url) + ""], gSobject);
    return gs.mc(this,"request",[url, function(error, response, body) {
      if ((!gs.bool(error)) && (gs.equals(gs.gp(response,"statusCode"), 200))) {
        return gs.println("" + (url) + " body size: " + (gs.mc(body,"size",[])) + " time: " + (gs.minus(gs.gp(gs.date(),"time"), gs.gp(time,"time"))) + "");
      } else {
        return gs.println("Error: " + (error) + "");
      };
    }], gSobject);
  }
  gSobject['parallel'] = function(closures) {
    return gs.mc(gs.fs('async', this, gSobject),"parallel",[closures]);
  }
  gSobject.nodejs = function(x0) { return NodeJs.nodejs(x0); }
  gSobject['NodeJs0'] = function(it) {
    gs.mc(gSobject,"module",["colors"]);
    return this;
  }
  if (arguments.length==0) {gSobject.NodeJs0(); }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
NodeJs.nodejs = function(cl) {
  var node = NodeJs();
  gs.sp(cl,"delegate",node);
  return gs.execCall(cl, this, []);
}
