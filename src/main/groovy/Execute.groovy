import static nodejs.NodeJs.nodejs

nodejs {
    rainbow '\nGrooscript in action 2014!' //<1>
    red     '--------------------------\n'

    module 'request' //<2>
    module 'async'

    parallel([ //<3>
        { countBodyChars 'http://grails.org' },
        { countBodyChars 'http://bintray.com' },
        { countBodyChars 'http://google.com' },
        { countBodyChars 'http://twitter.com' },
        { countBodyChars 'http://gradle.org' },
        { bold '\nReading url\'s...\n' },
    ])
}