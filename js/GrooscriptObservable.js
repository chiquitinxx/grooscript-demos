//Grooscript converted file
function GrooscriptObservable() {
  var gSobject = gs.inherit(gs.baseClass,'GrooscriptObservable');
  gSobject.clazz = { name: 'dualrx.GrooscriptObservable', simpleName: 'GrooscriptObservable'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.observable = null;
  gSobject['methodMissing'] = function(name, args) {
    return gs.mc(gs.gp(gs.thisOrObject(this,gSobject),"observable"),"" + (name) + "",gs.list([new gs.spread(args)]));
  }
  gSobject.fromList = function(x0) { return GrooscriptObservable.fromList(x0); }
  gSobject.platformObservable = function(list) {
    return Rx.Observable.from(list);
  }
  gSobject['GrooscriptObservable1'] = function(list) {
    gs.sp(this,"observable",gs.mc(gSobject,"platformObservable",[list]));
    return this;
  }
  if (arguments.length==1) {gSobject.GrooscriptObservable1(arguments[0]); }
  
  return gSobject;
};
GrooscriptObservable.fromList = function(list) {
  return GrooscriptObservable(list);
}
