//Grooscript converted file
function GrooscriptFirebase() {
  var gSobject = BaseFirebase();
  gSobject.clazz = { name: 'firebase.GrooscriptFirebase', simpleName: 'GrooscriptFirebase'};
  gSobject.clazz.superclass = { name: 'firebase.BaseFirebase', simpleName: 'BaseFirebase'};
  gSobject['onMessage'] = function(message) {
    return gs.println("Message received: " + (message) + "");
  }
  gSobject['GrooscriptFirebase0'] = function(it) {
    gSobject.BaseFirebase1("https://vivid-fire-5565.firebaseio.com/");
    return this;
  }
  if (arguments.length==0) {gSobject.GrooscriptFirebase0(); }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
