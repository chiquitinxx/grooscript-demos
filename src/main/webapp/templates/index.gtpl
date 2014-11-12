yieldUnescaped '<!DOCTYPE html>'
html {
    head {
        title 'Chat'
        ['js/jquery.min.js','js/grooscript.min.js','js/grooscript-tools.js',
        'js/Client.js','js/gstemplates.js','https://cdn.socket.io/socket.io-1.2.0.js'].each {
            script(type: 'text/javascript', src: it) {}
        }
        link(rel: 'stylesheet', type: 'text/css', href: 'css/chat.css')
    }

    body {
        header {
            h2 {
                a(href: 'http://grooscript.org') {
                    yield 'grooscript'
                }
                yield ' chat demo'
            }
        }
        section {
            div (id: 'loginArea') {
                input (id: 'login', autocomplete: 'off', autofocus: "true") {
                    button (id: 'loginButton') {
                        yield 'Login'
                    }
                }
            }
            div (id: 'chatArea') {
                ul id: 'messages'
                div (id: 'message') {
                    input (id: 'chat', autocomplete: 'off') {
                        button (id: 'sendMessage') {
                            yield 'Send'
                        }
                    }
                }
            }
        }
        script {
            yield 'Client.init();'
        }
    }
}