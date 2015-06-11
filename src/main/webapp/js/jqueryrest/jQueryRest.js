//Grooscript converted file
function Author() {
  var gSobject = gs.inherit(gs.baseClass,'Author');
  gSobject.clazz = { name: 'Author', simpleName: 'Author'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.clazz.interfaces = [{ name: 'rest.JQueryRestApi', simpleName: 'JQueryRestApi'}];
  gSobject.add = function(x1,x2) { return JQueryRestApi.add(gSobject,x1,x2); }
  if (JQueryRestApi['setProperty']) {
    gSobject.setProperty = function(x1) { return JQueryRestApi.setProperty(gSobject,x1); }
  }
  if (JQueryRestApi['getProperty']) {
    gSobject.getProperty = function() { return JQueryRestApi.getProperty(gSobject); }
  }
  gSobject.getResource = function() {  return Author.resource };
  gSobject.all = function(x1,x2) { return JQueryRestApi.all(gSobject,x1,x2); }
  gSobject.setUrl = function(x0) {  Author.url = x0 };
  gSobject.getUrl = function() {  return Author.url };
  gSobject.one = function(x1,x2,x3) { return JQueryRestApi.one(gSobject,x1,x2,x3); }
  gSobject.setResource = function(x0) {  Author.resource = x0 };
  JQueryRestApi.$init$(gSobject);
  gSobject.ajaxCall = function(x1,x2,x3,x4) { return JQueryRestApi.ajaxCall(gSobject,x1,x2,x3,x4); }
  gSobject.id = null;
  gSobject.name = null;
  gSobject.city = null;
  gSobject.image = null;
  gSobject.age = null;
  gSobject['toString'] = function(it) {
    return "id: " + (gSobject.id) + " name: " + (gSobject.name) + "";
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
JQueryRestApi$static$init$(Author);
var onError = function(jqXHR, status) {
  return gs.println("Error jqXHR: " + (jqXHR) + " status: " + (status) + "");
};
gs.sp(Author,"url","http://localhost:3000");
gs.sp(Author,"resource","authors");
var api = Author();
gs.mc(api,"one",[1, function(data) {
  var author = Author(data);
  return gs.println("Success one: " + (author) + "");
}, onError]);
gs.mc(api,"all",[function(authors) {
  gs.println("Success all: " + (gs.mc(authors,"size",[])) + "");
  return gs.mc(gs.mc(authors,"findAll",[function(it) {
    return gs.gp(it,"image");
  }]),"each",[function(it) {
    return gs.mc(gs.mc(this,"$",["body"]),"append",["<img src='" + (gs.gp(it,"image")) + "'/>"]);
  }]);
}, onError]);
var newAuthor = Author(gs.map().add("name","Jorge Franco").add("city","Madrid / Sevilla").add("image","img/logo.png"));
gs.mc(newAuthor,"add",[function(data) {
  gs.println("Success add: " + (gs.gp(data,"id")) + "");
  return gs.mc(api,"all",[function(authors) {
    return gs.println("Success after insert " + (gs.gp(data,"name")) + ": " + (gs.mc(authors,"size",[])) + "");
  }, onError]);
}, onError]);
