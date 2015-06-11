package rxjs

import groovy.transform.BaseScript
import org.grooscript.asts.GsNative

import static org.grooscript.GrooScript.toJavascript

@BaseScript
ReactiveScript baseScript

def keyUp = observeEvent(textInput, 'keyup')
                .map { it.target.value }
                .filter { text -> text.size() > 2 }
                .debounce(750)
                .distinctUntilChanged()

def searcher = keyUp.flatMapLatest(searchWikipedia)

searcher.subscribe(
    { terms, resultsDom ->
        resultsDom.empty()
        terms[1].each { resultsDom.append "<li>$it</li>" }
    }.rcurry(results), { errorMessage, resultsDom ->
        resultsDom.empty()
        resultsDom.append "<li>Error: $errorMessage</li>"
    }.rcurry(results)
)

class ReactiveScript extends Script {

    def selectors = [:]

    @GsNative
    def observeEvent(domElement, String eventName) {/*
        return Rx.Observable.fromEvent(domElement, eventName)
    */}

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

    def propertyMissing(String name) {
        if (!selectors[name]) {
            selectors[name] = $("#$name")
        }
        selectors[name]
    }

    def run() { }
}