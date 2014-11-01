import org.grooscript.templates.Templates

import static chat.NodeServer.server

server {
    get('/') {
        render Templates.applyTemplate('index.gtpl')
    }
    on('login') { data, socket ->
        if (data.name && !socket.login) {
            socket.login = data.name
            socket.emit 'loginok', [name: data.name]
            socket.broadcast.emit 'loginok', [name: data.name]
        }
    }
    on('msg') { data, socket ->
        if (data.msg && socket.login) {
            socket.broadcast.emit 'msg', [from: socket.login, msg: data.msg]
        }
    }
    on('disconnect') { socket ->
        if (socket.login) {
            socket.broadcast.emit 'off', [name: socket.login]
        }
    }
}.start(3000)
