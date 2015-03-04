//Grooscript converted file
var todoAngular = function($scope) {
  gs.sp($scope,"todos",gs.list([gs.map().add("text","learn angular").add("done",true) , gs.map().add("text","build an angular app").add("done",false)]));
  gs.sp($scope,"addTodo",function(it) {
    gs.mc(gs.gp($scope,"todos"),'leftShift', gs.list([gs.map().add("text",gs.gp($scope,"todoText")).add("done",false)]));
    return gs.sp($scope,"todoText","");
  });
  gs.sp($scope,"remaining",function(it) {
    return gs.mc(gs.gp($scope,"todos"),"inject",[0, function(acc, todo) {
      return (gs.bool(gs.gp(todo,"done")) ? gs.plus(acc, 1) : acc);
    }]);
  });
  return gs.sp($scope,"archive",function(it) {
    return gs.sp($scope,"todos",gs.mc(gs.gp($scope,"todos"),"findAll",[function(it) {
      return !gs.gp(it,"done");
    }]));
  });
};
