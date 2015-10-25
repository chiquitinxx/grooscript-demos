//Grooscript converted file
function BaseFirebase() {
  var gSobject = gs.init('BaseFirebase');
  gSobject.clazz = { name: 'firebase.BaseFirebase', simpleName: 'BaseFirebase'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.dataRef = null;
  gSobject.setProperty = function(name, value) {
    this.dataRef.child(name).set(gs.toJavascript(value));
  }
  gSobject.initFirebase = function(url) {
    this.dataRef = new Firebase(url);
  }
  gSobject.doOnEvent = function(name, nameMethod) {
    gSobject.dataRef.child(name).on('value', function(snapshot) {
            gSobject[nameMethod](gs.toGroovy(snapshot.val()));
        });
  }
  gSobject['BaseFirebase1'] = function(url) {
    gs.mc(gSobject,"initFirebase",[url]);
    gs.mc(gs.gp(this,"methods"),"each",[function(it) {
      if (gs.mc(gs.gp(it,"name"),"startsWith",["on"])) {
        var nameProperty = gs.mc(gs.mc(gs.gp(it,"name"),"substring",[2]),"toLowerCase",[]);
        return gs.mc(gSobject,"doOnEvent",[nameProperty, gs.gp(it,"name")]);
      };
    }]);
    return this;
  }
  if (arguments.length==1) {gSobject.BaseFirebase1(arguments[0]); }
  
  return gSobject;
};
