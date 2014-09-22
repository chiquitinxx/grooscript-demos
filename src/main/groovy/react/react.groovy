package react

import org.grooscript.jquery.GQueryImpl

/**
 * User: jorgefrancoleza
 * Date: 22/09/14
 */

def renderComponent = { component, selector ->
    component.init()
    component.selector = selector
    def gQuery = new GQueryImpl()
    gQuery.onReady {
        component.start()
    }
}

renderComponent(new TodoAppFinal(), '#todos')
