//Grooscript converted file
function Client() {
  var gSobject = gs.inherit(gs.baseClass,'Client');
  gSobject.clazz = { name: 'chat.Client', simpleName: 'Client'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.login = null;
  gSobject.chat = null;
  gSobject.socket = null;
  gSobject.gQuery = null;
  gSobject.socketInit = function() {
    this.socket = io(window.location.hostname);
  }
  gSobject['sendMessageClick'] = function(it) {
    gs.mc(gSobject.socket,"emit",["msg", gs.map().add("msg",gSobject.chat)]);
    gs.mc(gs.mc(gSobject,"gQuery",["#messages"]),"append",[gs.execStatic(Templates,'applyTemplate', this,["message.gtpl", gs.map().add("name",gSobject.login).add("msg",gSobject.chat)])]);
    return gs.mc(this,"setChat",[""], gSobject);
  }
  gSobject['loginButtonClick'] = function(it) {
    return gs.mc(gSobject.socket,"emit",["login", gs.map().add("name",gSobject.login)]);
  }
  gSobject['chatMode'] = function(login) {
    gs.mc(gs.mc(gSobject,"gQuery",["#chatArea"]),"show",[]);
    gs.mc(gs.mc(gSobject,"gQuery",["#loginArea"]),"hide",[]);
    return gs.mc(gs.mc(gSobject,"gQuery",["title"]),"text",["Chat - " + (login) + ""]);
  }
  gSobject.init = function() { return Client.init(); }
  gSobject['Client1'] = function(jQueryImpl) {
    gs.sp(this,"gQuery",jQueryImpl);
    gs.mc(gSobject,"socketInit",[]);
    gs.mc(gSobject.socket,"on",["msg", function(data) {
      return gs.mc(gs.mc(gSobject,"gQuery",["#messages"]),"append",[gs.execStatic(Templates,'applyTemplate', this,["message.gtpl", gs.map().add("name",gs.gp(data,"from")).add("msg",gs.gp(data,"msg"))])]);
    }]);
    gs.mc(gSobject.socket,"on",["loginok", function(data) {
      if (gs.equals(gs.gp(data,"name"), gSobject.login)) {
        gs.mc(gSobject,"chatMode",[gSobject.login]);
      };
      return gs.mc(gs.mc(gSobject,"gQuery",["#messages"]),"append",[gs.execStatic(Templates,'applyTemplate', this,["join.gtpl", gs.map().add("name",gs.gp(data,"name"))])]);
    }]);
    gs.mc(gSobject.socket,"on",["off", function(data) {
      return gs.mc(gs.mc(gSobject,"gQuery",["#messages"]),"append",[gs.execStatic(Templates,'applyTemplate', this,["left.gtpl", gs.map().add("name",gs.gp(data,"name"))])]);
    }]);
    gs.mc(gs.mc(gSobject,"gQuery",["#chatArea"]),"hide",[]);
    gs.mc(gs.mc(gSobject,"gQuery",["#loginArea"]),"show",[]);
    return this;
  }
  if (arguments.length==1) {gSobject.Client1(arguments[0]); }
  
  return gSobject;
};
Client.init = function(it) {
  var gQuery = GQueryImpl();
  return gs.mc(gQuery,"onReady",[function(it) {
    var client = Client(gQuery);
    gs.mc(gQuery,"bindAllProperties",[client]);
    return gs.mc(gQuery,"attachMethodsToDomEvents",[client]);
  }]);
}
