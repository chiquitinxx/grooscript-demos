//Grooscript converted file
function TodoController() {
  var gSobject = gs.init('TodoController');
  gSobject.clazz = { name: 'angular.TodoController', simpleName: 'TodoController'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.clazz.interfaces = [{ name: 'angular.AngularController', simpleName: 'AngularController'}];
  gSobject.init = function() { return AngularController.init(gSobject); }
  gSobject.controllerProperties = function(x1) { return AngularController.controllerProperties(gSobject,x1); }
  gSobject.controllerMethods = function(x1) { return AngularController.controllerMethods(gSobject,x1); }
  gSobject.getScope = function() { return AngularController.getScope(gSobject); }
  gSobject.setScope = function(x1) { return AngularController.setScope(gSobject,x1); }
  gSobject.todos = gs.list([gs.map().add("text","learn angular").add("done",true) , gs.map().add("text","build an angular app").add("done",false)]);
  gSobject['addTodo'] = function(it) {
    gs.mc(gs.gp(gSobject.getScope(),"todos"),'leftShift', gs.list([gs.map().add("text",gs.gp(gSobject.getScope(),"todoText")).add("done",false)]));
    return gs.sp(gSobject.getScope(),"todoText","");
  }
  gSobject['remaining'] = function(it) {
    return gs.mc(gs.gp(gSobject.getScope(),"todos"),"count",[function(it) {
      return gs.gp(it,"done");
    }]);
  }
  gSobject['archive'] = function(it) {
    return gs.sp(gSobject.getScope(),"todos",gs.mc(gSobject.todos,"findAll",[function(it) {
      return !gs.gp(it,"done");
    }]));
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
TodoController.controllerProperties = function() { return AngularController.controllerProperties.apply(TodoController, [TodoController].concat(Array.prototype.slice.call(arguments)));}
TodoController.controllerMethods = function() { return AngularController.controllerMethods.apply(TodoController, [TodoController].concat(Array.prototype.slice.call(arguments)));}
AngularController = function() {};
AngularController.gSaT = function(target) {
  target.init = function(x0) { return AngularController.init(target, x0); };
  target.controllerProperties = function(x0, x1) { return AngularController.controllerProperties(target, x0, x1); };
  target.controllerMethods = function(x0, x1) { return AngularController.controllerMethods(target, x0, x1); };
  target.getScope = function(x0) { return AngularController.getScope(target, x0); };
  target.setScope = function(x0, x1) { return AngularController.setScope(target, x0, x1); };
};
AngularController.$init$ = function($self) {
}
function AngularController$static$init$($static$self){
  
};
AngularController.init = function($self) {
  return gs.mc(function(controller, angularScope) {
    gs.sp(controller,"scope",angularScope);
    gs.mc(gs.mc($self,"controllerProperties",[controller]),"each",[function(nameProperty) {
      return gs.sp(angularScope,"" + (nameProperty) + "",gs.gp(controller,"" + (nameProperty) + ""));
    }]);
    return gs.mc(gs.mc($self,"controllerMethods",[controller]),"each",[function(nameMethod) {
      return gs.sp(angularScope,"" + (nameMethod) + "",controller["" + (nameMethod) + ""]);
    }]);
  },"curry",[$self]);
}
AngularController.controllerProperties = function($static$self, controller) {
  return gs.mc(gs.mc(gs.gp(controller,"properties"),"findAll",[function(key, value) {
    return !gs.gSin(key, gs.list(["class" , "scope"]));
  }]),"collect",[function(key, value) {
    return key;
  }]);
}
AngularController.controllerMethods = function($static$self, controller) {
  return gs.mc(gs.mc(gs.gp((controller = gs.metaClass(controller)),"methods"),"findAll",[function(method) {
    return (((!gs.bool(gs.mc(gs.gp(method,"name"),"startsWith",["set"]))) && (!gs.bool(gs.mc(gs.gp(method,"name"),"startsWith",["get"])))) && (!gs.bool(gs.mc(gs.gp(method,"name"),"contains",["$"])))) && (!gs.bool(gs.gSin(gs.gp(method,"name"), gs.list(["equals" , "hashCode" , "notify" , "notifyAll" , "toString" , "wait" , "controllerMethods" , "controllerProperties" , "init" , "invokeMethod"]))));
  }]),"collect",[function(it) {
    return gs.gp(it,"name");
  }]);
}
AngularController.getScope = function($self) { return $self.angular_AngularController__scope; }
AngularController.setScope = function($self, value) { $self.angular_AngularController__scope = value; }
