//Grooscript converted file
function Client() {
  var gSobject = gs.inherit(gs.baseClass,'Client');
  gSobject.clazz = { name: 'chat.Client', simpleName: 'Client'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.login = null;
  gSobject.chat = null;
  gSobject.socket = null;
  gSobject.init = function() {
    this.socket = io('http://localhost:3000');
        $('#chatArea').hide();
        $('#loginArea').show();
  }
  gSobject['sendMessageClick'] = function(it) {
    gs.mc(gSobject.socket,"emit",["msg", gs.map().add("msg",gSobject.chat)]);
    gs.mc(gSobject,"append",["#messages", gs.execStatic(Templates,'applyTemplate', this,["message.gtpl", gs.map().add("name",gSobject.login).add("msg",gSobject.chat)])]);
    return gs.mc(this,"setChat",[""], gSobject);
  }
  gSobject['loginButtonClick'] = function(it) {
    return gs.mc(gSobject.socket,"emit",["login", gs.map().add("name",gSobject.login)]);
  }
  gSobject.append = function(selector, html) {
    $(selector).append(html);
  }
  gSobject.chatMode = function(login) {
    $('#chatArea').show();
        $('#loginArea').hide();
        $('title').text(login);
  }
  gSobject['Client0'] = function(it) {
    gs.mc(gSobject,"init",[]);
    gs.mc(gSobject.socket,"on",["msg", function(data) {
      return gs.mc(gSobject,"append",["#messages", gs.execStatic(Templates,'applyTemplate', this,["message.gtpl", gs.map().add("name",gs.gp(data,"from")).add("msg",gs.gp(data,"msg"))])]);
    }]);
    gs.mc(gSobject.socket,"on",["loginok", function(data) {
      if (gs.equals(gs.gp(data,"name"), gSobject.login)) {
        gs.mc(gSobject,"chatMode",[gSobject.login]);
      };
      return gs.mc(gSobject,"append",["#messages", gs.execStatic(Templates,'applyTemplate', this,["join.gtpl", gs.map().add("name",gs.gp(data,"name"))])]);
    }]);
    gs.mc(gSobject.socket,"on",["off", function(data) {
      return gs.mc(gSobject,"append",["#messages", gs.execStatic(Templates,'applyTemplate', this,["left.gtpl", gs.map().add("name",gs.gp(data,"name"))])]);
    }]);
    return this;
  }
  if (arguments.length==0) {gSobject.Client0(); }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
