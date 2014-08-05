package nodejs

import colors.JsColors
import org.grooscript.asts.GsNative

class NodeJs implements JsColors {

    @GsNative
    def module(String name) {/*
        try {
            global[name] = require(name);
        } catch(err) {
            this.red('Module '+name+' not installed, please install it.');
        }
    */}

    NodeJs() {
        module 'colors'
    }

    def countBodyChars(String url) {
        def time = new Date()
        grey "  Going $url"
        request(url, { error, response, body ->
            if (!error && response.statusCode == 200) {
                println "$url body size: ${body.size()} time: ${new Date().time - time.time}"
            } else {
                println "Error: ${error}"
            }
        })
    }

    def parallel(List<Closure> closures) {
        async.parallel closures
    }

    static nodejs(@DelegatesTo(NodeJs) Closure cl) {
        def node = new NodeJs()
        cl.delegate = node
        cl()
    }
}
