package asciidoctor

import org.grooscript.asts.GsNative
import react.Component

@Component
class AdocLive {
    String adocCode
    def convertedCode

    void init() {
        adocCode = '''http://asciidoctor.org[*Asciidoctor*]
running on http://opalrb.org[_Opal_]
brings AsciiDoc to the browser!'''
        convertedCode = convert(adocCode)
    }

    @GsNative
    def convert(toConvert) {/*
        var options = Opal.hash2(['attributes'], {attributes: ['showtitle']});
        return Opal.Asciidoctor.$convert(toConvert, options);
    */}

    void adocCodeChange(newText) {
        convertedCode = convert(newText)
        setAdocCode(newText)
    }

    void render() {
        h3 'Asciidoctor code:'
        p '* Stay alert, your cursor move to the end after each change'
        textarea(id:'adocCode', cols: 100, rows: 14) {
            yieldUnescaped adocCode
        }
        h3 'Html Result:'
        hr()
        div {
            yieldUnescaped convertedCode
        }
    }
}
