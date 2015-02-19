//Grooscript converted file
gs.mc(gs.execStatic(Three,'scene', this,[function(it) {
  gs.mc(gs.mc(this,"tetrahedron",[200]),"moveTo",[-360, 300, 300]);
  gs.mc(gs.mc(this,"icosahedron",[200]),"moveTo",[360, 200, 300]);
  gs.mc(gs.mc(this,"sphere",[100, 50, 50]),"moveTo",[-300, -200, 100]);
  gs.mc(gs.mc(this,"torus",[200, 50, 50, 50]),"moveTo",[-300, -200, 100]);
  gs.mc(gs.mc(this,"ring",[20, 200, 50]),"moveTo",[450, -200, 100]);
  gs.mc(this,"setMaterial",[gs.fs('grooscriptMaterial', this)]);
  return gs.mc(this,"box",[200, 200, 200]);
}]),"animate",[function(items) {
  gs.mc(gs.mc(items,"findAll",[function(it) {
    return gs.gp(it,"name") != "Box";
  }]),"each",[function(it) {
    gs.sp(gs.gp(it,"rotation"),"x",gs.gp(gs.gp(it,"rotation"),"x") + (gs.gp(it,"name") != "Torus" ? 0.01 : -0.01));
    return gs.sp(gs.gp(it,"rotation"),"y",gs.gp(gs.gp(it,"rotation"),"y") + 0.02);
  }]);
  return gs.mc(gs.mc(items,"findAll",[function(it) {
    return gs.equals(gs.gp(it,"name"), "Box");
  }]),"each",[function(it) {
    return gs.mc(it,"rotateLeft",[]);
  }]);
}]);
