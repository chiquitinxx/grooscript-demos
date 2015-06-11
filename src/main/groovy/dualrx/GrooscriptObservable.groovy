package dualrx

import org.grooscript.asts.GsNative

class GrooscriptObservable<T> {

    Observable observable

    GrooscriptObservable(List list) {
        this.observable = platformObservable(list)
    }

    def methodMissing(String name, args) {
        this.observable."$name"(*args)
    }

    static fromList(List list) {
        new GrooscriptObservable(list)
    }

    @GsNative
    private platformObservable(List list) {/*
        return Rx.Observable.from(list);
    */
        Class.forName("rx.Observable").invokeMethod("from", list)
    }
}
