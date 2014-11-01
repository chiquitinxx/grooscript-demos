//Grooscript converted file
gs.mc(NodeServer.server(function(it) {
  gs.mc(this,"get",["/", function(it) {
    return gs.mc(this,"render",[gs.execStatic(Templates,'applyTemplate', this,["index.gtpl"])]);
  }]);
  gs.mc(this,"on",["login", function(data, socket) {
    if ((gs.bool(gs.gp(data,"name"))) && (!gs.bool(gs.gp(socket,"login")))) {
      gs.sp(socket,"login",gs.gp(data,"name"));
      gs.mc(socket,"emit",["loginok", gs.map().add("name",gs.gp(data,"name"))]);
      return gs.mc(gs.gp(socket,"broadcast"),"emit",["loginok", gs.map().add("name",gs.gp(data,"name"))]);
    };
  }]);
  gs.mc(this,"on",["msg", function(data, socket) {
    if ((gs.bool(gs.gp(data,"msg"))) && (gs.bool(gs.gp(socket,"login")))) {
      return gs.mc(gs.gp(socket,"broadcast"),"emit",["msg", gs.map().add("from",gs.gp(socket,"login")).add("msg",gs.gp(data,"msg"))]);
    };
  }]);
  return gs.mc(this,"on",["disconnect", function(socket) {
    if (gs.bool(gs.gp(socket,"login"))) {
      return gs.mc(gs.gp(socket,"broadcast"),"emit",["off", gs.map().add("name",gs.gp(socket,"login"))]);
    };
  }]);
}),"start",[3000]);
