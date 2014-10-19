//Grooscript converted file
function CustomSigma() {
  var gSobject = gs.inherit(gs.baseClass,'CustomSigma');
  gSobject.clazz = { name: 'countries.CustomSigma', simpleName: 'CustomSigma'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.s = null;
  gSobject.init = function(container) {
    this.s = new sigma(container);
        this.s.settings({
          edgeColor: 'default',
          defaultEdgeColor: 'grey'
        });
  }
  gSobject.refresh = function() {
    this.s.refresh();
  }
  gSobject.addNode = function(data) {
    this.s.graph.addNode({
          // Main attributes:
          id: data.id,
          label: data.label,
          // Display attributes:
          x: data.x * 10,
          y: data.y * (-10),
          size: 1,
          color: data.color
        });
  }
  gSobject.addEdge = function(id, source, target) {
    this.s.graph.addEdge({
          id: id,
          // Reference extremities:
          source: source,
          target: target
        });
  }
  gSobject['moveCamaraTo'] = function(x, y, ratio) {
    return gs.mc(gs.gp(gSobject.s,"cameras") [ 0],"goTo",[gs.map().add("x",x).add("y",y).add("ratio",ratio)]);
  }
  gSobject.moveCamaraToNode = function(node) {
    this.s.cameras[0].goTo({x:node['read_cam0:x'],y:node['read_cam0:y'],ratio:0.300})
  }
  gSobject['applyToNodes'] = function(closure) {
    return gs.mc(gs.mc(gs.gp(gSobject.s,"graph"),"nodes",[]),"forEach",[closure]);
  }
  gSobject['CustomSigma1'] = function(container) {
    gs.mc(gSobject,"init",[container]);
    return this;
  }
  if (arguments.length==1) {gSobject.CustomSigma1(arguments[0]); }
  
  return gSobject;
};
