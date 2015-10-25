//Grooscript converted file
function Functions() {
  var gSobject = gs.init('Functions');
  gSobject.clazz = { name: 'paint.Functions', simpleName: 'Functions'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject['nBezier'] = function(t, points) {
    var length = gs.minus(gs.mc(points,"size",[]), 1);
    return gs.plus(gs.gp(gs.mc(points,"inject",[gs.map().add("index",0).add("sum",0), function(acc, value) {
      gs.sp(acc,"sum",gs.gp(acc,"sum") + (gs.multiply((gs.multiply((gs.multiply(gs.mc(gSobject,"coef",[length, gs.gp(acc,"index")]), (gs.minus(value, (points[0]))))), Math.pow(gs.minus(1, t), gs.minus(length, gs.gp(acc,"index"))))), Math.pow(t, gs.gp(acc,"index")))));
      gs.plusPlus(acc,"index",true,false);
      return acc;
    }]),"sum"), (points[0]));
  }
  gSobject['coef'] = function(m, n) {
    if ((gs.equals(m, n)) || (gs.equals(n, 0))) {
      return 1;
    } else {
      return gs.div(gs.mc(gSobject,"fact",[m]), (gs.multiply(gs.mc(gSobject,"fact",[n]), gs.mc(gSobject,"fact",[gs.minus(m, n)]))));
    };
  }
  gSobject['fact'] = function(n) {
    var result = null;
    var gSswitch0 = n;
    if (gs.equals(gSswitch0, 2)) {
      result = 2;
      ;
    } else if (gs.equals(gSswitch0, 3)) {
      result = 3;
      ;
    } else if (gs.equals(gSswitch0, 4)) {
      result = 6;
      ;
    } else if (gs.equals(gSswitch0, 5)) {
      result = 24;
      ;
    } else if (gs.equals(gSswitch0, 6)) {
      result = 120;
      ;
    } else if (gs.equals(gSswitch0, 7)) {
      result = 720;
      ;
    } else if (gs.equals(gSswitch0, 8)) {
      result = 5040;
      ;
    } else if (gs.equals(gSswitch0, 9)) {
      result = 40320;
      ;
    } else if (gs.equals(gSswitch0, 10)) {
      result = 362880;
      ;
    } else {
      result = 1;
    };
    return result;
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
