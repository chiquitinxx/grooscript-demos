//Grooscript converted file
function Cell() {
  var gSobject = gs.inherit(gs.baseClass,'Cell');
  gSobject.clazz = { name: 'game.Cell', simpleName: 'Cell'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.value = null;
  gSobject['reset'] = function(it) {
    return gSobject.value = null;
  }
  gSobject['equals'] = function(other) {
    return ((gs.bool(gs.gp(gs.thisOrObject(this,gSobject),"value"))) && (gs.bool(gs.gp(other,"value")))) && (gs.equals(gSobject.value, gs.gp(other,"value")));
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
