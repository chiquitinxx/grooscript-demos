//Grooscript converted file
var renderComponent = function(component, selector) {
  var gQuery = GQueryImpl();
  return gs.mc(gQuery,"onReady",[function(it) {
    return gs.mc(component,"start",[selector]);
  }]);
};
gs.execCall(renderComponent, this, [AdocLive(), "#asciidoctor"]);
