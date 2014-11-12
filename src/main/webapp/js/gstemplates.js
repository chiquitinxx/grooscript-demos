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
        return (3).times(function(it) {
          return gs.mc(Templates,"img",[gs.map().add("src","img/groovy.png").add("height",20)]);
        });
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
        var randomNumber = gs.mc(gs.random(),"nextInt",[gs.mc(pirateMessages,"size",[])]);
        return gs.mc(Templates,"yield",["" + (gs.fs('msg', this)) + " " + (pirateMessages [ randomNumber]) + ""]);
      } else {
        return gs.mc(Templates,"yield",[gs.fs('msg', this)]);
      };
    }]);
  }]);
}).add("index.gtpl",function(model) {
  if (model === undefined) model = gs.map();
  return gs.mc(HtmlBuilder,"build",[function(it) {
    gs.mc(Templates,"yieldUnescaped",["<!DOCTYPE html>"]);
    return gs.mc(Templates,"html",[function(it) {
      gs.mc(Templates,"head",[function(it) {
        gs.mc(Templates,"title",["Chat"]);
        gs.mc(gs.list(["js/jquery.min.js" , "js/grooscript.min.js" , "js/grooscript-tools.js" , "js/Client.js" , "js/gstemplates.js" , "https://cdn.socket.io/socket.io-1.2.0.js"]),"each",[function(it) {
          return gs.mc(Templates,"script",[gs.map().add("type","text/javascript").add("src",it), function(it) {
          }]);
        }]);
        return gs.mc(Templates,"link",[gs.map().add("rel","stylesheet").add("type","text/css").add("href","css/chat.css")]);
      }]);
      return gs.mc(Templates,"body",[function(it) {
        gs.mc(Templates,"header",[function(it) {
          gs.mc(Templates,"h2",[function(it) {
            gs.mc(Templates,"a",[gs.map().add("href","http://grooscript.org"), function(it) {
              return gs.mc(Templates,"yield",["grooscript"]);
            }]);
            return gs.mc(Templates,"yield",[" chat demo"]);
          }]);
          return gs.mc(Templates,"h4",[function(it) {
            return gs.mc(Templates,"a",[gs.map().add("href","https://github.com/chiquitinxx/grooscript-demos"), function(it) {
              return gs.mc(Templates,"yield",["GitHub source demos"]);
            }]);
          }]);
        }]);
        gs.mc(Templates,"section",[function(it) {
          gs.mc(Templates,"div",[gs.map().add("id","loginArea"), function(it) {
            return gs.mc(Templates,"input",[gs.map().add("id","login").add("autocomplete","off").add("autofocus","true"), function(it) {
              return gs.mc(Templates,"button",[gs.map().add("id","loginButton"), function(it) {
                return gs.mc(Templates,"yield",["Login"]);
              }]);
            }]);
          }]);
          return gs.mc(Templates,"div",[gs.map().add("id","chatArea"), function(it) {
            gs.mc(Templates,"ul",[gs.map().add("id","messages")]);
            return gs.mc(Templates,"div",[gs.map().add("id","message"), function(it) {
              return gs.mc(Templates,"input",[gs.map().add("id","chat").add("autocomplete","off"), function(it) {
                return gs.mc(Templates,"button",[gs.map().add("id","sendMessage"), function(it) {
                  return gs.mc(Templates,"yield",["Send"]);
                }]);
              }]);
            }]);
          }]);
        }]);
        return gs.mc(Templates,"script",[function(it) {
          return gs.mc(Templates,"yield",["Client.init();"]);
        }]);
      }]);
    }]);
  }]);
});
