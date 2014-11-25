//Grooscript converted file
function SnapSvg() {
  var gSobject = gs.inherit(gs.baseClass,'SnapSvg');
  gSobject.clazz = { name: 'snap.SnapSvg', simpleName: 'SnapSvg'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.snap = null;
  gSobject['circle'] = function(attributes) {
    return gs.mc(gSobject,"createElement",["circle", attributes]);
  }
  gSobject['text'] = function(attributes) {
    return gs.mc(gSobject,"createElement",["text", attributes]);
  }
  gSobject['rect'] = function(attributes) {
    return gs.mc(gSobject,"createElement",["rect", attributes]);
  }
  gSobject.createSnap = function(selector) {
    return Snap(selector);
  }
  gSobject.createElement = function(name, attributes) {
    var element = Element();
        var newSnap = this.snap.el(name, gs.toJavascript(attributes));
        for (var ob in element) {
            newSnap[ob] = element[ob];
        }
        return newSnap;
  }
  gSobject.repeat = function(time, closure) {
    window.setInterval(closure, time);
  }
  gSobject.snapSvg = function(x0,x1) { return SnapSvg.snapSvg(x0,x1); }
  gSobject['SnapSvg1'] = function(selector) {
    gSobject.snap = gs.mc(gSobject,"createSnap",[selector]);
    return this;
  }
  if (arguments.length==1) {gSobject.SnapSvg1(arguments[0]); }
  
  return gSobject;
};
SnapSvg.snapSvg = function(selector, cl) {
  gs.sp(cl,"delegate",SnapSvg(selector));
  return (cl.delegate!=undefined?gs.applyDelegate(cl,cl.delegate,[]):gs.execCall(cl, this, []));
}

function Element() {
  var gSobject = gs.inherit(gs.baseClass,'Element');
  gSobject.clazz = { name: 'snap.Element', simpleName: 'Element'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.setVerticalScale = function(scale) {
    this.transform('scale(1,'+scale+')');
  }
  gSobject.rotate = function(degrees, x, y) {
    this.transform('r'+degrees+','+x+','+y);
        return this;
  }
  gSobject.rotateAndScale = function(degrees, scale, x, y) {
    var t = new Snap.Matrix()
              .rotate(degrees, x, y)
              .scale(1, scale);
        this.transform(t);
  }
  gSobject.copy = function() {
    var element = Element();
        var newSnap = this.clone();
        for (var ob in element) {
            newSnap[ob] = element[ob];
        }
        return newSnap;
  }
  gSobject.setProperty = function(name, value) {
    if (name == 'verticalScale') {
            this.setVerticalScale(value);
        } else {
            this.attr(gs.toJavascript(gs.map().add(name, value)));
        }
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
