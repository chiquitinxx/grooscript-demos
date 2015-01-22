package firebase

class GrooscriptFirebase extends BaseFirebase {
    GrooscriptFirebase() {
        super('https://vivid-fire-5565.firebaseio.com/')
    }

    def onMessage(message) {
        println "Message received: $message"
        $('body').append "<h3>Message received: ${message}</h3>"
    }
}
