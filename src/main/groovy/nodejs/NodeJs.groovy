package nodejs

import colors.JsColors
import org.grooscript.asts.GsNative

class NodeJs implements JsColors { //<1>

    @GsNative //<2>
    def module(String name) {/*
        try {
            global[name] = require(name);
        } catch(err) {
            this.red('Module '+name+' not installed, please install it.');
        }
    */}

    NodeJs() {
        module 'colors' //<3>
    }

    def countBodyChars(String url) {
        def time = new Date()
        grey "  Going $url"
        request(url, { error, response, body -> //<4>
            if (!error && response.statusCode == 200) {
                println "$url body size: ${body.size()} time: ${new Date().time - time.time}"
            } else {
                println "Error: ${error}"
            }
        })
    }

    def parallel(List<Closure> closures) {
        async.parallel closures //<5>
    }

    static nodejs(@DelegatesTo(NodeJs) Closure cl) { //<6>
        def node = new NodeJs()
        cl.delegate = node
        cl()
    }
}
