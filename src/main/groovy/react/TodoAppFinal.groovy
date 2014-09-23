package react

import org.grooscript.builder.HtmlBuilder
import org.grooscript.jquery.GQuery
import org.grooscript.jquery.GQueryImpl

class TodoAppFinal {
    List<String> todos
    String actualTodo

    GQuery gQuery = new GQueryImpl()  //<1>
    String selector                   //<2>

    void init() {
        todos = []
        actualTodo = ''
    }

    void actualTodoChange(actualTodoValue) {
        setActualTodo(actualTodoValue)
    }

    void addTodosSubmit() {
        if (actualTodo) {
            todos << actualTodo
            setActualTodo('')
        }
    }

    void render() {
        gQuery.html(selector, HtmlBuilder.build {  //<3>
            form(id: 'addTodos') {
                h3 'TODO'
                ul {
                    todos.each {
                        li it
                    }
                    li {
                        input(type: 'text', id: 'actualTodo', value: actualTodo)
                        button {
                            yield "Add #${todos.size() + 1}"
                        }
                    }
                }
            }
        })
    }

    //<5>
    void bindEvents() {
        gQuery.attachMethodsToDomEvents(this)
    }

    //<6>
    void setActualTodo(value) {
        actualTodo = value
        start()
        gQuery.focusEnd('#actualTodo')
    }

    //<7>
    void start() {
        render()
        bindEvents()
    }
}
