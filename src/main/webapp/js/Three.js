//Grooscript converted file
function Three() {
  var gSobject = gs.inherit(gs.baseClass,'Three');
  gSobject.clazz = { name: 'three.Three', simpleName: 'Three'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.scene = null;
  gSobject.camera = null;
  gSobject.items = gs.list([]);
  gSobject.renderer = null;
  gSobject.actions = null;
  gSobject.material = null;
  gSobject.grooscriptMaterial = null;
  gSobject.scene = function(x0) { return Three.scene(x0); }
  gSobject['animate'] = function(closure) {
    gSobject.actions = gs.elvis(gs.bool(gSobject.actions) , gSobject.actions , closure);
    gs.mc(gSobject,"animationFrame",[gSobject["animate"]]);
    gs.mc(gSobject,"actions",[gSobject.items]);
    return gs.mc(gSobject.renderer,"render",[gSobject.scene, gSobject.camera]);
  }
  gSobject['methodMissing'] = function(name, args) {
    var mesh = gs.mc(gSobject,"newMesh",gs.list([gs.mc(name,"capitalize",[]), new gs.spread(args)]));
    gs.sp((mesh = gs.metaClass(mesh)),"rotateLeft",gs.mc(function(ob) {
      return gs.sp(gs.gp(ob,"rotation"),"y",gs.gp(gs.gp(ob,"rotation"),"y") - 0.02);
    },"curry",[mesh]));
    gs.sp((mesh = gs.metaClass(mesh)),"moveTo",gs.mc(function(ob, x, y, z) {
      return gs.mc(gs.gp(ob,"position"),"set",[x, y, z]);
    },"curry",[mesh]));
    gs.mc(gSobject.scene,"add",[mesh]);
    gs.mc(gSobject.items,'leftShift', gs.list([mesh]));
    return mesh;
  }
  gSobject.getDefaultScene = function() {
    var scene = new THREE.Scene();
        //Default material
        var map = THREE.ImageUtils.loadTexture('img/texture.jpg');
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 16;
        gSobject.material = new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: map, side: THREE.DoubleSide } );
        var grooscriptMap = THREE.ImageUtils.loadTexture('img/logo.png');
        gSobject.grooscriptMaterial = new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: grooscriptMap, side: THREE.DoubleSide } );
        //Light
        scene.add( new THREE.AmbientLight(0xF0F0F0));
        return scene;
  }
  gSobject.getDefaultCamera = function() {
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;
        return camera;
  }
  gSobject.getDefaultRenderer = function() {
    var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        return renderer;
  }
  gSobject.newMesh = function(name, args) {
    if (arguments.length == 1 && arguments[0] instanceof Array) { args=gs.list(arguments[0]); } else 
    if (arguments.length == 2) { args=gs.list([arguments[2 - 1]]); } else 
    if (arguments.length < 2) { args=gs.list([]); } else 
    if (arguments.length > 2) {
      args=gs.list([args]);
      for (gScount=2;gScount < arguments.length; gScount++) {
        args.add(arguments[gScount]);
      }
    }
    var geo = gSobject.construct(THREE[name + 'Geometry'], args);
        var object = new THREE.Mesh(geo, gSobject.material);
        object.name = name;
        object.position.set(0, 0, 0);
        return object;
  }
  gSobject.animationFrame = function(func) {
    requestAnimationFrame(func);
  }
  gSobject.construct = function(constructor, args) {
    function F() {
            return constructor.apply(this, args);
        }
        F.prototype = constructor.prototype;
        return new F();
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
Three.scene = function(closure) {
  var three = Three();
  gs.sp(closure,"delegate",three);
  gs.sp(three,"scene",gs.gp(three,"defaultScene"));
  gs.sp(three,"camera",gs.gp(three,"defaultCamera"));
  gs.execCall(closure, this, []);
  gs.sp(three,"renderer",gs.gp(three,"defaultRenderer"));
  return three;
}
