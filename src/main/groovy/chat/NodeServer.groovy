package chat

import org.grooscript.asts.GsNative

/**
 * User: jorgefrancoleza
 * Date: 21/10/14
 */
class NodeServer {
    //Initial functions, so this groovy script will run
    def expressApp = [get: { path, closure -> "Get in '${path}'."}]
    def nodeJsServer = [listen: { Integer port -> println 'Listening in port ' + port}]
    def socketIo
    def allSocketsOn = []
    def allClients = []

    NodeServer() {
        setupServer()
    }

    @GsNative
    private setupServer() {/*
        var express = require('express');
        this.expressApp = express();
        this.expressApp.set('port', (process.env.PORT || 5000));
        this.expressApp.use(express.static(__dirname + '/src/main/webapp'));
        this.nodeJsServer = require('http').Server(this.expressApp);
        this.socketIo = require('socket.io')(this.nodeJsServer);
    */}

    @GsNative
    private startNodeJsServer() {/*
        var port = this.expressApp.get('port');
        console.log("Chat is running at port:" + port);
        this.nodeJsServer.listen(port);
    */}

    @GsNative
    def listenSockets() {/*
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

    */}

    def get(String path, Closure closure) {
        expressApp.get(path, { req, resp ->
            closure.delegate = [req: req, resp: resp, render: { resp.send(it)}]
            closure()
        })
    }

    def on(String path, Closure closure) {
        allSocketsOn << [path: path, closure: closure]
    }

    static server(@DelegatesTo(NodeServer) closure) {
        NodeServer nodeServer = new NodeServer()
        closure.delegate = nodeServer
        closure()
        [start: { ->
            nodeServer.listenSockets()
            nodeServer.startNodeJsServer()
        }]
    }
}
