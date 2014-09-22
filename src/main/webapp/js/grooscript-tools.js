//This script needs grooscript.js to run
function HtmlBuilder() {
  var gSobject = gs.inherit(gs.baseClass,'HtmlBuilder');
  gSobject.clazz = { name: 'org.grooscript.builder.HtmlBuilder', simpleName: 'HtmlBuilder'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.html = null;
  gSobject.tagSolver = function(name, args) {
    gSobject.html += "<" + (name) + "";
    if ((((gs.bool(args)) && (gs.mc(args,"size",[]) > 0)) && (!gs.instanceOf((args [ 0]), "String"))) && (!gs.instanceOf((args [ 0]), "Closure"))) {
      gs.mc(args [ 0],"each",[function(key, value) {
        return gSobject.html += " " + (key) + "='" + (value) + "'";
      }]);
    };
    gSobject.html += ">";
    if (gs.bool(args)) {
      if ((gs.equals(gs.mc(args,"size",[]), 1)) && (gs.instanceOf((args [ 0]), "String"))) {
        gs.mc(gSobject,"yield",[args [ 0]]);
      } else {
        var lastArg = gs.mc(args,"last",[]);
        if (gs.instanceOf(lastArg, "Closure")) {
          gs.sp(lastArg,"delegate",this);
          (lastArg.delegate!=undefined?gs.applyDelegate(lastArg,lastArg.delegate,[]):gs.execCall(lastArg, this, []));
        };
        if ((gs.instanceOf(lastArg, "String")) && (gs.mc(args,"size",[]) > 1)) {
          gs.mc(gSobject,"yield",[lastArg]);
        };
      };
    };
    return gSobject.html += "</" + (name) + ">";
  };
  gSobject.build = function(x0) { return HtmlBuilder.build(x0); }
  gSobject['yield'] = function(text) {
    return gs.mc(text,"each",[function(ch) {
      var gSswitch0 = ch;
      if (gSswitch0 === "&") {
        gSobject.html += "&amp;";
        ;
      } else if (gSswitch0 === "<") {
        gSobject.html += "&lt;";
        ;
      } else if (gSswitch0 === ">") {
        gSobject.html += "&gt;";
        ;
      } else if (gSswitch0 === "\"") {
        gSobject.html += "&quot;";
        ;
      } else if (gSswitch0 === "'") {
        gSobject.html += "&apos;";
        ;
      } else {
        gSobject.html += ch;
        ;
      };
    }]);
  }
  gSobject['yieldUnescaped'] = function(text) {
    return gSobject.html += text;
  }
  gSobject['comment'] = function(text) {
    return gSobject.html += (gs.plus((gs.plus("<!--", text)), "-->"));
  }
  gSobject['newLine'] = function(it) {
    return gSobject.html += "\n";
  }
  gSobject['methodMissing'] = function(name, args) {
    gs.sp(this,"" + (name) + "",function(ars) {
      if (arguments.length == 1 && arguments[0] instanceof Array) { ars=gs.list(arguments[0]); } else 
      if (arguments.length == 1) { ars=gs.list([arguments[1 - 1]]); } else 
      if (arguments.length < 1) { ars=gs.list([]); } else 
      if (arguments.length > 1) {
        ars=gs.list([ars]);
        for (gScount=1;gScount < arguments.length; gScount++) {
          ars.add(arguments[gScount]);
        }
      }
      return gs.mc(gSobject,"tagSolver",[name, ars]);
    });
    return gs.mc(this,"invokeMethod",[name, args], gSobject);
  }
  gSobject['HtmlBuilder0'] = function(it) {
    gSobject.html = "";
    return this;
  }
  if (arguments.length==0) {gSobject.HtmlBuilder0(); }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
HtmlBuilder.build = function(closure) {
  var mc = gs.expandoMetaClass(HtmlBuilder, false, true);
  gs.mc(mc,"initialize",[]);
  var builder = HtmlBuilder();
  gs.sp(builder,"metaClass",mc);
  gs.sp(closure,"delegate",builder);
  (closure.delegate!=undefined?gs.applyDelegate(closure,closure.delegate,[]):gs.execCall(closure, this, []));
  return gs.gp(builder,"html");
}

//This script needs grooscript.js and jQuery to run
function GQueryImpl() {
  var gSobject = gs.inherit(gs.baseClass,'GQueryImpl');
  gSobject.clazz = { name: 'org.grooscript.jquery.GQueryImpl', simpleName: 'GQueryImpl'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.clazz.interfaces = [{ name: 'org.grooscript.jquery.GQuery', simpleName: 'GQuery'}, ];
  gSobject.bind = function(selector, target, nameProperty, closure) {
    if (closure === undefined) closure = null;
    var sourceDom = $(selector);
        //Create set method
        var nameSetMethod = 'set'+nameProperty.capitalize();

        if (sourceDom.is(":text")) {
            target[nameSetMethod] = function(newValue) {
                this[nameProperty] = newValue;
                sourceDom.val(newValue);
                if (closure) { closure(newValue); };
            };
            sourceDom.bind('input', function() {
                var currentVal = $(this).val();
                target[nameProperty] = currentVal;
                if (closure) { closure(currentVal); };
            });
        } else if (sourceDom.is('textarea')) {
            target[nameSetMethod] = function(newValue) {
                this[nameProperty] = newValue;
                sourceDom.val(newValue);
                if (closure) { closure(newValue); };
            };
            sourceDom.bind('input propertychange', function() {
                var currentVal = $(this).val();
                target[nameProperty] = currentVal;
                if (closure) { closure(currentVal); };
            });
        } else if (sourceDom.is(":checkbox")) {
            target[nameSetMethod] = function(newValue) {
                this[nameProperty] = newValue;
                sourceDom.prop('checked', newValue);
                if (closure) { closure(newValue); };
            };
            sourceDom.change(function() {
                var currentVal = $(this).is(':checked');
                target[nameProperty] = currentVal;
                if (closure) { closure(currentVal); };
            });
        } else if (sourceDom.is(":radio")) {
            target[nameSetMethod] = function(newValue) {
                this[nameProperty] = newValue;
                $(selector +'[value="' + newValue + '"]').prop('checked', true);
                if (closure) { closure(newValue); };
            };
            sourceDom.change(function() {
                var currentVal = $(this).val();
                target[nameProperty] = currentVal;
                if (closure) { closure(currentVal); };
            });
        } else if (sourceDom.is("select")) {
            target[nameSetMethod] = function(newValue) {
                this[nameProperty] = newValue;
                sourceDom.val(newValue);
                if (closure) { closure(newValue); };
            };
            sourceDom.bind('change', function() {
                var currentVal = $(this).val();
                target[nameProperty] = currentVal;
                if (closure) { closure(currentVal); };
            });
        } else {
            console.log('Not supporting bind for selector ' + selector);
        }
  }
  gSobject.existsId = function(id) {
    return $("#" + id).length > 0
  }
  gSobject.existsName = function(name) {
    return $("[name='" + name + "']").length > 0
  }
  gSobject.existsGroup = function(name) {
    return $("input:radio[name='" + name + "']").length > 0
  }
  gSobject.bindEvent = function(id, name, func) {
    $('#'+id).on(name, func);
  }
  gSobject.doRemoteCall = function(url, type, params, onSuccess, onFailure, objectResult) {
    if (objectResult === undefined) objectResult = null;
    $.ajax({
            type: type, //GET or POST
            data: gs.toJavascript(params),
            url: url,
            dataType: 'text'
        }).done(function(newData) {
            if (onSuccess) {
                onSuccess(gs.toGroovy(jQuery.parseJSON(newData), objectResult));
            }
        })
        .fail(function(error) {
            if (onFailure) {
                onFailure(error);
            }
        });
  }
  gSobject.onReady = function(func) {
    $(document).ready(func);
  }
  gSobject.html = function(selector, text) {
    $(selector).html(text);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};

//This script needs grooscript.js and jQuery to run
function Binder() {
  var gSobject = gs.inherit(gs.baseClass,'Binder');
  gSobject.clazz = { name: 'org.grooscript.jquery.Binder', simpleName: 'Binder'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.gQuery = GQueryImpl();
  gSobject['bindAllProperties'] = function(target, closure) {
    if (closure === undefined) closure = null;
    return gs.mc(gs.gp(target,"properties"),"each",[function(name, value) {
      if (gs.mc(gSobject.gQuery,"existsId",[name])) {
        gs.mc(gSobject.gQuery,"bind",["#" + (name) + "", target, name, closure]);
      };
      if (gs.mc(gSobject.gQuery,"existsName",[name])) {
        gs.mc(gSobject.gQuery,"bind",["[name='" + (name) + "']", target, name, closure]);
      };
      if (gs.mc(gSobject.gQuery,"existsGroup",[name])) {
        return gs.mc(gSobject.gQuery,"bind",["input:radio[name=" + (name) + "]", target, name, closure]);
      };
    }]);
  }
  gSobject['bindAllMethods'] = function(target) {
    return gs.mc(gs.gp((target = gs.metaClass(target)),"methods"),"each",[function(method) {
      if (gs.mc(gs.gp(method,"name"),"endsWith",["Click"])) {
        var shortName = gs.mc(gs.gp(method,"name"),"substring",[0, gs.minus(gs.mc(gs.gp(method,"name"),"length",[]), 5)]);
        if (gs.mc(gSobject.gQuery,"existsId",[shortName])) {
          return gs.mc(gSobject.gQuery,"bindEvent",[shortName, "click", target["" + (gs.gp(method,"name")) + ""]]);
        };
      };
    }]);
  }
  gSobject['call'] = function(target, closure) {
    if (closure === undefined) closure = null;
    gs.mc(gSobject,"bindAllProperties",[target, closure]);
    return gs.mc(gSobject,"bindAllMethods",[target]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};

