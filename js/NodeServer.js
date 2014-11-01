//Grooscript converted file
function NodeServer() {
  var gSobject = gs.inherit(gs.baseClass,'NodeServer');
  gSobject.clazz = { name: 'chat.NodeServer', simpleName: 'NodeServer'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.expressApp = gs.map().add("get",function(path, closure) {
    return "Get in '" + (path) + "'.";
  });
  gSobject.nodeJsServer = gs.map().add("listen",function(port) {
    return gs.println(gs.plus("Listening in port ", port));
  });
  gSobject.socketIo = null;
  gSobject.allSocketsOn = gs.list([]);
  gSobject.allClients = gs.list([]);
  gSobject.setupServer = function() {
    var express = require('express');
        this.expressApp = express();
        this.expressApp.use(express.static(__dirname + '/src/main/webapp'));
        this.nodeJsServer = require('http').Server(this.expressApp);
        this.socketIo = require('socket.io')(this.nodeJsServer);
  }
  gSobject.listenSockets = function() {
    console.log('Initializing socket.io...');
        this.socketIo.sockets.on('connection', function(socket) {
            gSobject.allClients.push(socket);

            gSobject.allSocketsOn.each(function (data) {
                var fn;
                if (data.path == 'disconnect') {
                    fn = function() {
                        data.closure(socket);
                    };
                } else {
                    var fn = function(msg) {
                        data.closure(msg, socket);
                    };
                }
                socket.on(data.path, fn);
                //console.log('Listening sockets: '+data.path);
            });

            socket.on('disconnect', function() {
                console.log('Got disconnect !');

                var i = gSobject.allClients.indexOf(socket);
                delete gSobject.allClients[i];
            });
        });
  }
  gSobject['get'] = function(path, closure) {
    return gs.mc(gSobject.expressApp,"get",[path, function(req, resp) {
      gs.sp(closure,"delegate",gs.map().add("req",req).add("resp",resp).add("render",function(it) {
        return gs.mc(resp,"send",[it]);
      }));
      return (closure.delegate!=undefined?gs.applyDelegate(closure,closure.delegate,[]):gs.execCall(closure, this, []));
    }]);
  }
  gSobject['on'] = function(path, closure) {
    return gs.mc(gSobject.allSocketsOn,'leftShift', gs.list([gs.map().add("path",path).add("closure",closure)]));
  }
  gSobject.server = function(x0) { return NodeServer.server(x0); }
  gSobject['NodeServer0'] = function(it) {
    gs.mc(gSobject,"setupServer",[]);
    return this;
  }
  if (arguments.length==0) {gSobject.NodeServer0(); }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
NodeServer.server = function(closure) {
  var nodeServer = NodeServer();
  gs.sp(closure,"delegate",nodeServer);
  (closure.delegate!=undefined?gs.applyDelegate(closure,closure.delegate,[]):gs.execCall(closure, this, []));
  return gs.map().add("start",function(port) {
    gs.println("Server start on port: " + (port) + "");
    gs.mc(nodeServer,"listenSockets",[]);
    return gs.mc(gs.gp(nodeServer,"nodeJsServer"),"listen",[port]);
  });
}
