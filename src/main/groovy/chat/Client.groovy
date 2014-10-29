package chat

import org.grooscript.asts.GsNative
import org.grooscript.templates.Templates

/**
 * User: jorgefrancoleza
 * Date: 29/10/14
 */
class Client {

    def login
    def chat
    def socket

    Client() {
        init()
        socket.on 'msg', { data ->
            append '#messages', Templates.applyTemplate('message.gtpl', [name: data.from, msg: data.msg])
        }
        socket.on 'loginok', { data ->
            if (data.name == login) {
                chatMode(login)
            }
            append '#messages', Templates.applyTemplate('join.gtpl', [name: data.name])
        }
        socket.on 'off', { data ->
            append '#messages', Templates.applyTemplate('left.gtpl', [name: data.name])
        }
    }

    @GsNative
    void init() {/*
        this.socket = io('http://localhost:3000');
        $('#chatArea').hide();
        $('#loginArea').show();
    */}

    def sendMessageClick() {
        socket.emit 'msg', [msg: chat]
        append '#messages', Templates.applyTemplate('message.gtpl', [name: login, msg: chat])
        setChat ''
    }

    def loginButtonClick() {
        socket.emit 'login', [name: login]
    }

    @GsNative
    void append(selector, html) {/*
        $(selector).append(html);
    */}

    @GsNative
    void chatMode(login) {/*
        $('#chatArea').show();
        $('#loginArea').hide();
        $('title').text(login);
    */}
}
