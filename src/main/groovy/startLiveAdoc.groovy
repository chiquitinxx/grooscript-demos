import asciidoctor.AdocLive
import org.grooscript.jquery.GQueryImpl

def renderComponent = { component, selector ->
    def gQuery = new GQueryImpl()
    gQuery.onReady {
        component.start(selector)
    }
}

renderComponent(new AdocLive(), '#asciidoctor')
