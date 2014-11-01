package chat

import org.grooscript.asts.GsNative
import org.grooscript.jquery.GQuery
import org.grooscript.jquery.GQueryImpl
import org.grooscript.templates.Templates

class Client {

    def login
    def chat
    def socket
    GQuery gQuery

    Client(jQueryImpl) {
        this.gQuery = jQueryImpl
        socketInit()
        socket.on 'msg', { data ->
            gQuery('#messages').append Templates.applyTemplate('message.gtpl', [name: data.from, msg: data.msg])
        }
        socket.on 'loginok', { data ->
            if (data.name == login) {
                chatMode(login)
            }
            gQuery('#messages').append Templates.applyTemplate('join.gtpl', [name: data.name])
        }
        socket.on 'off', { data ->
            gQuery('#messages').append Templates.applyTemplate('left.gtpl', [name: data.name])
        }
        gQuery('#chatArea').hide()
        gQuery('#loginArea').show()
    }

    @GsNative
    void socketInit() {/*
        this.socket = io('http://localhost:3000');
    */}

    def sendMessageClick() {
        socket.emit 'msg', [msg: chat]
        gQuery('#messages').append Templates.applyTemplate('message.gtpl', [name: login, msg: chat])
        setChat ''
    }

    def loginButtonClick() {
        socket.emit 'login', [name: login]
    }

    void chatMode(login) {
        gQuery('#chatArea').show()
        gQuery('#loginArea').hide()
        gQuery('title').text "Chat - $login"
    }

    static init() {
        def gQuery = new GQueryImpl()
        gQuery.onReady {
            def client = new Client(gQuery)
            gQuery.bindAllProperties(client)
            gQuery.attachMethodsToDomEvents(client)
        }
    }
}
