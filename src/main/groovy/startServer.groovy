/**
 * User: jorgefrancoleza
 * Date: 21/10/14
 */
import static chat.NodeServer.server

server {
    get('/') {
        render 'Hello World!'
    }
    get('/spanish') {
        render 'Hola Mundo!'
    }
    get('/salute/:name') {
        render "Hello ${req.params.name}!"
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
    on('login') { data ->
        println 'Try login: '+data.name
    }
    on('disconnect') { socket ->
        if (socket.login) {
            socket.broadcast.emit 'off', [name: socket.login]
        }
    }
}.start(3000)
