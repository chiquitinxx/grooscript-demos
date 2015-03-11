//Grooscript converted file
function ReactiveScript() {
  var gSobject = gs.inherit(gs.baseClass,'ReactiveScript');
  gSobject.clazz = { name: 'rxjs.ReactiveScript', simpleName: 'ReactiveScript'};
  gSobject.clazz.superclass = { name: 'groovy.lang.Script', simpleName: 'Script'};
  gSobject.selectors = gs.map();
  gSobject.searchWikipedia = function(term) {
    return gs.mc(gs.mc(gs.fs('$', this),"ajax",[gs.map().add("url","http://en.wikipedia.org/w/api.php").add("dataType","jsonp").add("data",gs.toJavascript(gs.map().add("action","opensearch").add("format","json").add("search",gs.mc(gs.fs('window', this),"encodeURI",[term]))))]),"promise",[]);
  };
  gSobject.observeEvent = function(domElement, eventName) {
    return Rx.Observable.fromEvent(domElement, eventName)
  }
  gSobject['propertyMissing'] = function(name) {
    if (!gs.bool(gSobject.selectors[name])) {
      (gSobject.selectors[name]) = gs.mc(this,"$",["#" + (name) + ""], gSobject);
    };
    return gSobject.selectors[name];
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};


var baseScript = ReactiveScript();
baseScript.withz(function() {;
  var keyUp = gs.mc(gs.mc(gs.mc(gs.mc(gs.mc(this,"observeEvent",[gs.fs('textInput', this), "keyup"]),"map",[function(it) {
    return gs.gp(gs.gp(it,"target"),"value");
  }]),"filter",[function(text) {
    return gs.mc(text,"size",[]) > 2;
  }]),"debounce",[750]),"distinctUntilChanged",[]);
  var searcher = gs.mc(keyUp,"flatMapLatest",[gs.fs('searchWikipedia', this)]);
  gs.mc(searcher,"subscribe",[gs.mc(function(terms, resultsDom) {
    gs.mc(resultsDom,"empty",[]);
    return gs.mc(terms[1],"each",[function(it) {
      return gs.mc(resultsDom,"append",["<li>" + (it) + "</li>"]);
    }]);
  },"rcurry",[gs.fs('results', this)]), gs.mc(function(errorMessage, resultsDom) {
    gs.mc(resultsDom,"empty",[]);
    return gs.mc(resultsDom,"append",["<li>Error: " + (errorMessage) + "</li>"]);
  },"rcurry",[gs.fs('results', this)])]);
});
