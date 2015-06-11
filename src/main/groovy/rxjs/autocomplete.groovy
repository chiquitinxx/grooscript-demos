package rxjs

import org.grooscript.asts.GsNative

import static org.grooscript.GrooScript.toJavascript
import static rxjs.ReactiveResolver.reactive

reactive {
    def searchWikipedia = { term ->
        jQuery.ajax(url: 'http://en.wikipedia.org/w/api.php',
            dataType: 'jsonp',
            data: toJavascript([
                    action: 'opensearch',
                    format: 'json',
                    search: window.encodeURI(term)
                ])
        ).promise()
    }

    def results = $('#results')
    def textInput = $('#textInput')
    def main = {
        def keyUp = fromEvent(textInput, 'keyup')
            .map { it.target.value }
            .filter { text -> text.size() > 2 }
            .debounce(750)
            .distinctUntilChanged()

        def searcher = keyUp.flatMapLatest(searchWikipedia)

        searcher.subscribe(
            { data ->
                results.empty()
                data[1].each {
                    results.append "<li>$it</li>"
                }
            },
            { error ->
                results.empty()
                results.append "<li>Error: $error</li>"
            })
    }
    main()
}

class ReactiveResolver {

    static reactive(@DelegatesTo(ReactiveResolver) Closure cl) {
        def resolver = new ReactiveResolver()
        cl.delegate = resolver
        cl()
    }

    @GsNative
    def fromEvent(domElement, String eventName) {/*
        return Rx.Observable.fromEvent(domElement, eventName)
    */}
}