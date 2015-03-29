//Grooscript example using reactjs native to create ios app
//Starting react native getting started: http://facebook.github.io/react-native/docs/getting-started.html#content
//and replace index.ios.js with this file
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
} = React;

var gs = require('grooscript');

function Components() {
  var gSobject = gs.inherit(gs.baseClass,'Components');
  gSobject.clazz = { name: 'reactNative.Components', simpleName: 'Components'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.list = gs.list([]);
  gSobject['methodMissing'] = function(name, args) {
    return gs.mc(gSobject.list,'leftShift', gs.list([gs.mc(React,"createElement",[gs.mc(gSobject,"component",[name]), gs.toJavascript(args[0]), args[1]])]));
  }
  gSobject['image'] = function(args) {
    return gs.mc(gSobject.list,'leftShift', gs.list([gs.mc(React,"createElement",[gs.mc(gSobject,"component",["image"]), gs.toJavascript(args)])]));
  }
  gSobject.component = function(name) {
    if (name == 'text') return Text;
        if (name == 'image') return Image;
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};

function GroovyView() {
  var gSobject = gs.inherit(gs.baseClass,'GroovyView');
  gSobject.clazz = { name: 'reactNative.GroovyView', simpleName: 'GroovyView'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject['data'] = function(map, closure) {
    var allParams = gs.list([View , map]);
    var components = Components();
    gs.sp(closure,"delegate",components);
    gs.execCall(closure, this, []);
    gs.mc(gs.gp(components,"list"),"each",[function(it) {
      return gs.mc(allParams,'leftShift', gs.list([it]));
    }]);
    return gs.mc(gs.gp(React,"createElement"),"apply",[React, allParams]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};


var styles = gs.mc(StyleSheet,"create",[gs.toJavascript(gs.map().add("container",gs.map().add("flex",1).add("justifyContent","center").add("alignItems","center").add("backgroundColor","#ffffff")).add("welcome",gs.map().add("fontSize",20).add("textAlign","center").add("margin",10)).add("image",gs.map().add("width",192).add("height",96)))]);
var AwesomeProject = gs.mc(React,"createClass",[gs.map().add("render",function(it) {
  var groovyView = GroovyView();
  return gs.mc(groovyView,"data",[gs.map().add("style",gs.gp(styles,"container")), function(it) {
    gs.mc(this,"image",[gs.map().add("style",gs.gp(styles,"image")).add("source",gs.map().add("uri","http://grooscript.org/img/groovy.png"))]);
    gs.mc(this,"text",[gs.map().add("style",gs.gp(styles,"welcome")), "Hello #ios from #groovylang"]);
    gs.mc(this,"text",[gs.map().add("style",gs.gp(styles,"welcome")), "With @grooscript"]);
    return gs.mc(this,"text",[gs.map().add("style",gs.gp(styles,"welcome")), "and @reactjs native"]);
  }]);
})]);

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);