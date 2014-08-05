package colors

import org.grooscript.asts.GsNative

/**
 * User: jorgefrancoleza
 * Date: 07/03/14
 */
trait JsColors {
    @GsNative
    def red(String msg) {/*
        console.log(msg.red);
    */}

    @GsNative
    def bold(String msg) {/*
        console.log(msg.bold);
    */}

    @GsNative
    def grey(String msg) {/*
        console.log(msg.grey);
    */}

    @GsNative
    def rainbow(String msg) {/*
        console.log(msg.rainbow);
    */}
}
