import org.grooscript.jquery.GQueryImpl //<1>
import react.TodoAppFinal

def renderComponent = { component, selector ->
    component.init() //<2>
    component.selector = selector //<3>
    def gQuery = new GQueryImpl()
    gQuery.onReady {
        component.start() //<4>
    }
}

renderComponent(new TodoAppFinal(), '#todos') //<5>
