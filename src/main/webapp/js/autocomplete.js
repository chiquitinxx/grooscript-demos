//Grooscript converted file
function ReactiveResolver() {
  var gSobject = gs.inherit(gs.baseClass,'ReactiveResolver');
  gSobject.clazz = { name: 'rxjs.ReactiveResolver', simpleName: 'ReactiveResolver'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.reactive = function(x0) { return ReactiveResolver.reactive(x0); }
  gSobject.fromEvent = function(domElement, eventName) {
    return Rx.Observable.fromEvent(domElement, eventName)
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
ReactiveResolver.reactive = function(cl) {
  var resolver = ReactiveResolver();
  gs.sp(cl,"delegate",resolver);
  return gs.execCall(cl, this, []);
}


ReactiveResolver.reactive(function(it) {
  var searchWikipedia = function(term) {
    return gs.mc(gs.mc(gs.fs('jQuery', this),"ajax",[gs.map().add("url","http://en.wikipedia.org/w/api.php").add("dataType","jsonp").add("data",gs.toJavascript(gs.map().add("action","opensearch").add("format","json").add("search",gs.mc(gs.fs('window', this),"encodeURI",[term]))))]),"promise",[]);
  };
  var results = gs.mc(this,"$",["#results"]);
  var textInput = gs.mc(this,"$",["#textInput"]);
  var main = function(it) {
    var keyUp = gs.mc(gs.mc(gs.mc(gs.mc(gs.mc(this,"fromEvent",[textInput, "keyup"]),"map",[function(it) {
      return gs.gp(gs.gp(it,"target"),"value");
    }]),"filter",[function(text) {
      return gs.mc(text,"size",[]) > 2;
    }]),"debounce",[750]),"distinctUntilChanged",[]);
    var searcher = gs.mc(keyUp,"flatMapLatest",[searchWikipedia]);
    return gs.mc(searcher,"subscribe",[function(data) {
      gs.mc(results,"empty",[]);
      return gs.mc(data[1],"each",[function(it) {
        return gs.mc(results,"append",["<li>" + (it) + "</li>"]);
      }]);
    }, function(error) {
      gs.mc(results,"empty",[]);
      return gs.mc(results,"append",["<li>Error: " + (error) + "</li>"]);
    }]);
  };
  return gs.execCall(main, this, []);
});
