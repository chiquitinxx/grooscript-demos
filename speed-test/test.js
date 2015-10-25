var gs = require('./grooscript.js');
function Container() {
  var gSobject = gs.init('Container');
  gSobject.clazz = { name: 'Container', simpleName: 'Container'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.pieces = gs.list([]);
  gSobject['sum'] = function(it) {
    return gs.mc(gSobject.pieces,"sum",[function(it) {
      return gs.gp(it,"value");
    }]);
  }
  gSobject['Container0'] = function(it2) {
    var number = gs.plus(gs.mc(gs.random(),"nextInt",[20]), 20);
    gs.mc(number,"times",[function(it) {
      var piece = gs.map().add("name","name" + (it) + "").add("value",it);
      return gs.mc(gSobject.pieces,'leftShift', gs.list([piece]));
      //gSobject.pieces.push(piece);
    }]);
    return this;
  }
  if (arguments.length==0) {gSobject.Container0(); }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
var takeTime = function(closure) {
  var init = gs.date();
  gs.execCall(closure, this, []);
  return gs.minus(gs.gp(gs.date(),"time"), gs.gp(init,"time"));
};
gs.println(gs.plus("Sum containers time: ", gs.execCall(takeTime, this, [function(it) {
  return (5000).times(function(it) {
    var container = Container();
    return gs.mc(container,"sum",[]);
  });
}])));
gs.println(gs.plus("Functional time: ", gs.execCall(takeTime, this, [function(it) {
  return (500).times(function(it) {
    var container = Container();
    return gs.mc(gs.mc(gs.mc(gs.gp(container,"pieces"),"collect",[function(it) {
      return gs.map().add("doubleName",gs.multiply(gs.gp(it,"name"), 2)).add("value",gs.div(1, (gs.plus(gs.gp(it,"value"), 1))));
    }]),"sort",[function(it) {
      return gs.gp(it,"value");
    }]),"inject",[0, function(acc, item) {
      return gs.plus(acc, gs.gp(item,"value"));
    }]);
  });
}])));
