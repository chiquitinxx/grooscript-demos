function Templates() {
  var gSobject = gs.inherit(gs.baseClass,'Templates');
  gSobject.clazz = { name: 'org.grooscript.gradle.template.Templates', simpleName: 'Templates'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.__defineGetter__('templates', function(){ return Templates.templates; });
  gSobject.__defineSetter__('templates', function(gSval){ Templates.templates = gSval; });
  gSobject.applyTemplate = function(x0,x1) { return Templates.applyTemplate(x0,x1); }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
Templates.applyTemplate = function(name, model) {
  if (model === undefined) model = gs.map();
  var cl = Templates.templates [ name];
  gs.sp(cl,"delegate",model);
  return (cl.delegate!=undefined?gs.applyDelegate(cl,cl.delegate,[model]):gs.execCall(cl, this, [model]));
}
Templates.templates = gs.map().add("join.gtpl",function(model) {
  if (model === undefined) model = gs.map();
  return gs.mc(HtmlBuilder,"build",[function(it) {
    return gs.mc(Templates,"li",[function(it) {
      if (gs.equals(gs.fs('name', this), "Groovy")) {
        gs.mc(Templates,"img",[gs.map().add("src","img/groovy.png").add("height",20)]);
        return gs.mc(Templates,"img",[gs.map().add("src","img/groovy.png").add("height",20)]);
      } else {
        gs.mc(Templates,"b",["" + (gs.fs('name', this)) + " "]);
        return gs.mc(Templates,"yield",["joined the chat!"]);
      };
    }]);
  }]);
}).add("left.gtpl",function(model) {
  if (model === undefined) model = gs.map();
  return gs.mc(HtmlBuilder,"build",[function(it) {
    return gs.mc(Templates,"li",[function(it) {
      if (gs.mc(gs.mc(gs.fs('name', this),"toLowerCase",[]),"contains",["danveloper"])) {
        return gs.mc(Templates,"b",["#unfollowdanveloper"]);
      } else {
        gs.mc(Templates,"b",["" + (gs.fs('name', this)) + " "]);
        return gs.mc(Templates,"yield",["left the chat."]);
      };
    }]);
  }]);
}).add("message.gtpl",function(model) {
  if (model === undefined) model = gs.map();
  return gs.mc(HtmlBuilder,"build",[function(it) {
    var pirateMessages = gs.list(["YARRRRR!" , "YO-HO!" , "Ahoy Boys!" , "Surrrrrender the booty!"]);
    return gs.mc(Templates,"li",[function(it) {
      gs.mc(Templates,"b",["" + (gs.fs('name', this)) + ": "]);
      if (gs.mc(gs.mc(gs.fs('name', this),"loLowerCase",[]),"contains",["pirate"])) {
        return gs.mc(Templates,"yield",["" + (gs.fs('msg', this)) + " " + (pirateMessages [ gs.mc(gs.random(),"nextInt",[gs.mc(pirateMessages,"size",[])])]) + ""]);
      } else {
        return gs.mc(Templates,"yield",[gs.fs('msg', this)]);
      };
    }]);
  }]);
});
