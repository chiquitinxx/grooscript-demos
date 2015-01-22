//Grooscript converted file
function Draw() {
  var gSobject = gs.inherit(gs.baseClass,'Draw');
  gSobject.clazz = { name: 'paint.Draw', simpleName: 'Draw'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.functions = Functions();
  gSobject.r = gs.random();
  gSobject.colors = gs.list([gs.map().add("r",232).add("g",51).add("b",1) , gs.map().add("r",248).add("g",179).add("b",10) , gs.map().add("r",247).add("g",239).add("b",189) , gs.map().add("r",29).add("g",16).add("b",8)]);
  gSobject.__defineGetter__('PRECISSION', function(){ return Draw.PRECISSION; });
  gSobject.__defineSetter__('PRECISSION', function(gSval){ Draw.PRECISSION = gSval; });
  gSobject.__defineGetter__('N_GRADES', function(){ return Draw.N_GRADES; });
  gSobject.__defineSetter__('N_GRADES', function(gSval){ Draw.N_GRADES = gSval; });
  gSobject.maxWidth = 500;
  gSobject.maxHeight = 500;
  gSobject.ctx = null;
  gSobject.ctxWidth = null;
  gSobject.ctxHeight = null;
  gSobject['random'] = function(it) {
    var points = gs.list([]);
    gs.mc(Draw.N_GRADES,"times",[function(it) {
      return gs.mc(points,'leftShift', gs.list([gs.map().add("x",gs.mc(gSobject.r,"nextInt",[gSobject.maxWidth])).add("y",gs.mc(gSobject.r,"nextInt",[gSobject.maxHeight]))]));
    }]);
    var movex = gs.mc(gSobject.r,"nextInt",[gSobject.ctxWidth]);
    var movey = gs.mc(gSobject.r,"nextInt",[gSobject.ctxHeight]);
    var finalPoints = gs.mc(points,"collect",[function(it) {
      return gs.map().add("x",gs.plus((gs.minus(gs.gp(it,"x"), (gs.div(gSobject.maxWidth, 2)))), movex)).add("y",gs.plus((gs.minus(gs.gp(it,"y"), (gs.div(gSobject.maxHeight, 2)))), movey));
    }]);
    return gs.mc(gSobject,"drawBezier",[finalPoints]);
  }
  gSobject['drawBezier'] = function(points) {
    var xList = gs.mc(points,"collect",[function(it) {
      return gs.gp(it,"x");
    }]);
    var yList = gs.mc(points,"collect",[function(it) {
      return gs.gp(it,"y");
    }]);
    var color = gSobject.colors[gs.mc(gSobject.r,"nextInt",[4])];
    var width = gs.plus(gs.mc(gSobject.r,"nextInt",[30]), 35);
    return gs.mc(gs.range(1, Draw.PRECISSION, true),"each",[function(it) {
      var posx = gs.mc(gSobject.functions,"nBezier",[gs.div(it, Draw.PRECISSION), xList]);
      var posy = gs.mc(gSobject.functions,"nBezier",[gs.div(it, Draw.PRECISSION), yList]);
      gs.mc(gSobject,"drawCircle",[posx, posy, color, gs.div(it, width)]);
      if (gs.mc(gSobject.r,"nextInt",[100]) > 97) {
        return gs.mc(gSobject,"drawCircle",[gs.plus(posx, 20), gs.plus(posy, 20), color, gs.div((gs.div(it, width)), 2)]);
      };
    }]);
  }
  gSobject.initCanvas = function(name) {
    var canvas = document.getElementById(name);
        this.ctxWidth = canvas.width;
        this.ctxHeight = canvas.height;
        this.ctx = canvas.getContext('2d');
  }
  gSobject.drawCircle = function(x, y, color, radius) {
    this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = "rgb("+color.r+", "+color.g+", "+ color.b +")";
        this.ctx.fill();
  }
  gSobject['Draw1'] = function(idCanvas) {
    gs.mc(gSobject,"initCanvas",[idCanvas]);
    return this;
  }
  if (arguments.length==1) {gSobject.Draw1(arguments[0]); }
  
  return gSobject;
};
Draw.PRECISSION = 800;
Draw.N_GRADES = 9;
