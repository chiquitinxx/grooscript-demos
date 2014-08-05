package colors

import static nodejs.NodeJs.nodejs

nodejs {
    red 'Message in red with colors'
    rainbow 'Grooscript in action 2014!\n'

    module 'request'
    module 'async'

    parallel([
        { countBodyChars 'http://grails.org' },
        { countBodyChars 'http://bintray.com' },
        { countBodyChars 'http://google.com' },
        { countBodyChars 'http://twitter.com' },
        { countBodyChars 'http://groovy.codehaus.org' },
        { countBodyChars 'http://gradle.org' },
        { bold '\nReading url\'s...\n' },
    ])
}