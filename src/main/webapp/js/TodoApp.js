//Grooscript converted file
function TodoApp() {
  var gSobject = gs.inherit(gs.baseClass,'TodoApp');
  gSobject.clazz = { name: 'react.TodoApp', simpleName: 'TodoApp'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.todos = null;
  gSobject.actualTodo = null;
  gSobject.gQuery = GQueryImpl();
  gSobject.selector = null;
  gSobject['init'] = function(it) {
    gSobject.todos = gs.list([]);
    return gSobject.actualTodo = "";
  }
  gSobject['actualTodoChange'] = function(actualTodoValue) {
    return gs.mc(gSobject,"setActualTodo",[actualTodoValue]);
  }
  gSobject['addTodosSubmit'] = function(it) {
    if (gs.bool(gSobject.actualTodo)) {
      gs.mc(gSobject.todos,'leftShift', gs.list([gSobject.actualTodo]));
      return gs.mc(gSobject,"setActualTodo",[""]);
    };
  }
  gSobject['render'] = function(it) {
    return gs.mc(gSobject.gQuery,"html",[gSobject.selector, gs.execStatic(HtmlBuilder,'build', this,[function(it) {
      return gs.mc(this,"form",[gs.map().add("id","addTodos"), function(it) {
        gs.mc(this,"h3",["TODO"], gSobject);
        return gs.mc(this,"ul",[function(it) {
          gs.mc(gSobject.todos,"each",[function(it) {
            return gs.mc(this,"li",[it], gSobject);
          }]);
          return gs.mc(this,"li",[function(it) {
            gs.mc(this,"input",[gs.map().add("type","text").add("id","actualTodo").add("value",gSobject.actualTodo)], gSobject);
            return gs.mc(this,"button",[function(it) {
              return gs.mc(this,"yield",["Add #" + (gs.plus(gs.mc(gSobject.todos,"size",[]), 1)) + ""], gSobject);
            }], gSobject);
          }], gSobject);
        }], gSobject);
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
  gSobject['setActualTodo'] = function(actualTodo) {
    this["actualTodo"] = actualTodo;
    gs.mc(gSobject,"draw",[]);
    return gs.mc(gSobject.gQuery,"focusEnd",["#actualTodo"]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
