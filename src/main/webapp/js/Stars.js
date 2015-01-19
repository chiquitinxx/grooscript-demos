//Grooscript converted file
function Stars() {
  var gSobject = gs.inherit(gs.baseClass,'Stars');
  gSobject.clazz = { name: 'raphael.Stars', simpleName: 'Stars'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.__defineGetter__('STARS_NUMBER', function(){ return Stars.STARS_NUMBER; });
  gSobject.__defineSetter__('STARS_NUMBER', function(gSval){ Stars.STARS_NUMBER = gSval; });
  gSobject.context = null;
  gSobject.groovyImage = null;
  gSobject.grailsImage = null;
  gSobject.height = null;
  gSobject.width = null;
  gSobject.random = gs.random();
  gSobject.stars = gs.list([]);
  gSobject['start'] = function(id) {
    gs.mc(gSobject,"initCanvas",[id]);
    gs.mc(Stars.STARS_NUMBER,"times",[function(it) {
      var size = gs.multiply((gs.plus((gs.mc(gSobject.random,"nextInt",[10]) / 10), 0.5)), 3);
      return gs.mc(gSobject.stars,'leftShift', gs.list([gs.map().add("x",gs.mc(gSobject.random,"nextInt",[gSobject.width])).add("y",gs.mc(gSobject.random,"nextInt",[gSobject.height])).add("speed",gs.multiply(size, 3)).add("size",size)]));
    }]);
    return gs.mc(gSobject,"draw",[gSobject["initAndMove"]]);
  }
  gSobject['initAndMove'] = function(it) {
    gs.sp(gSobject.context,"fillStyle","#000000");
    gs.mc(gSobject.context,"fillRect",[0, 0, gSobject.width, gSobject.height]);
    gs.sp(gSobject.context,"fillStyle","#FFFFFF");
    gs.mc(gSobject.stars,"each",[function(star) {
      var newX = gs.plus(gs.gp(star,"x"), gs.gp(star,"speed"));
      if (newX > gSobject.width) {
        newX = 0;
      };
      gs.sp(star,"x",newX);
      return gs.mc(gSobject.context,"fillRect",[gs.gp(star,"x"), gs.gp(star,"y"), gs.gp(star,"size"), gs.gp(star,"size")]);
    }]);
    gs.mc(gSobject.context,"drawImage",[gSobject.groovyImage, gs.minus(gSobject.width, 210), gs.minus(gSobject.height, 110)]);
    gs.mc(gSobject.context,"drawImage",[gSobject.grailsImage, 10, gs.minus(gSobject.height, 110), 100, 100]);
    gs.sp(gSobject.context,"font","48px serif");
    gs.mc(gSobject.context,"fillText",["Keep on groovy'ing!", gs.minus((gSobject.width / 2), 190), gs.minus(gSobject.height, 50)]);
    gs.sp(gSobject.context,"font","24px serif");
    return gs.mc(gSobject.context,"fillText",["While groovy and grails crew looking for a new home...", 50, 60]);
  }
  gSobject.draw = function(closure) {
    setInterval(closure, 1000/60);
  }
  gSobject.initCanvas = function(id) {
    var canvas = document.getElementById(id);
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        gSobject.height = canvas.height;
        gSobject.width = canvas.width;
        gSobject.context = canvas.getContext("2d");

        gSobject.groovyImage = document.getElementById("groovyImage");
        gSobject.grailsImage = document.getElementById("grailsImage");
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
Stars.STARS_NUMBER = 1500;
