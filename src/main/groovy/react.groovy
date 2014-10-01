import org.grooscript.jquery.GQueryImpl //<1>
import react.TodoApp

def renderComponent = { component, selector ->
    def gQuery = new GQueryImpl()
    gQuery.onReady {
        component.start(selector) //<4>
    }
}

renderComponent(new TodoApp(), '#todos') //<5>
