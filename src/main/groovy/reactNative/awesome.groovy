package reactNative

import org.grooscript.asts.GsNative

/**
 * Created by jorgefrancoleza on 27/3/15.
 */
import static org.grooscript.GrooScript.toJavascript

class Components {
    def list = []

    def methodMissing(String name, args) {
        list << React.createElement(component(name), toJavascript(args[0]), args[1])
    }

    def image(Map args) {
        list << React.createElement(component('image'), toJavascript(args))
    }

    @GsNative
    private component(name) {/*
        if (name == 'text') return Text;
        if (name == 'image') return Image;
    */}
}

class GroovyView {
    def data(map, Closure closure) {
        def allParams = [View, map]
        def components = new Components()
        closure.delegate = components
        closure()
        components.list.each {
            allParams << it
        }
        React.createElement.apply(React, allParams)
    }
}

def styles = StyleSheet.create toJavascript(
    container: [
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    ],
    welcome: [
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    ],
    image: [
        width: 192,
        height: 96,
    ]
)

def AwesomeProject = React.createClass(
    render: {
        def groovyView = new GroovyView()
        groovyView.data(style: styles.container) {
            image style: styles.image, source: [uri: 'http://grooscript.org/img/groovy.png']
            text style: styles.welcome, "Hello #ios from #groovylang"
            text style: styles.welcome, "With @grooscript"
            text style: styles.welcome, "and @reactjs native"
        }
})