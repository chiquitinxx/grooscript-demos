//Grooscript converted file
function AdocLive() {
  var gSobject = gs.init('AdocLive');
  gSobject.clazz = { name: 'asciidoctor.AdocLive', simpleName: 'AdocLive'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.adocCode = null;
  gSobject.convertedCode = null;
  gSobject.gQuery = GQueryImpl();
  gSobject.selector = null;
  gSobject['init'] = function(it) {
    gSobject.adocCode = "http://asciidoctor.org[*Asciidoctor*]\nrunning on http://opalrb.org[_Opal_]\nbrings AsciiDoc to the browser!";
    return gSobject.convertedCode = gs.mc(gSobject,"convert",[gSobject.adocCode]);
  }
  gSobject.convert = function(toConvert) {
    var options = Opal.hash2(['attributes'], {attributes: ['showtitle']});
        return Opal.Asciidoctor.$convert(toConvert, options);
  }
  gSobject['adocCodeChange'] = function(newText) {
    gSobject.convertedCode = gs.mc(gSobject,"convert",[newText]);
    return gs.mc(gSobject,"setAdocCode",[newText]);
  }
  gSobject['render'] = function(it) {
    return gs.mc(gs.execCall(gs.gp(gs.thisOrObject(this,gSobject),"gQuery"), this, [gSobject.selector]),"html",[gs.execStatic(HtmlBuilder,'build', this,[function(it) {
      gs.mc(this,"h3",["Asciidoctor code:"], gSobject);
      gs.mc(this,"p",["* Stay alert, your cursor move to the end after each change"], gSobject);
      gs.mc(this,"textarea",[gs.map().add("id","adocCode").add("cols",100).add("rows",14), function(it) {
        return gs.mc(this,"yieldUnescaped",[gSobject.adocCode], gSobject);
      }], gSobject);
      gs.mc(this,"h3",["Html Result:"], gSobject);
      gs.mc(this,"hr",[], gSobject);
      return gs.mc(this,"div",[function(it) {
        return gs.mc(this,"yieldUnescaped",[gSobject.convertedCode], gSobject);
      }], gSobject);
    }])]);
  }
  gSobject['draw'] = function(it) {
    gs.mc(gSobject,"render",[]);
    return gs.mc(gSobject.gQuery,"attachMethodsToDomEvents",[this]);
  }
  gSobject['start'] = function(selector) {
    gs.sp(this,"selector",selector);
    gs.mc(gSobject,"init",[]);
    return gs.mc(gSobject,"draw",[]);
  }
  gSobject['setAdocCode'] = function(adocCode) {
    this["adocCode"] = adocCode;
    gs.mc(gSobject,"draw",[]);
    return gs.mc(gSobject.gQuery,"focusEnd",["#adocCode"]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
