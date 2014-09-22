package react

import org.grooscript.asts.GsNative
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

    @GsNative  //<4>
    def bindInput(selector, closure) {/*
        $(selector).bind('input', function() {
            var currentVal = $(this).val();
            if (closure) { closure(currentVal); };
        });
    */}

    @GsNative   //<4>
    def focus(selector) {/*
        var input = $(selector);
        var originalValue = input.val();
        input.val('');
        input.blur().focus().val(originalValue);
    */}

    //<5>
    void bindEvents() {
        bindInput('#actualTodo', this.&actualTodoChange)
        gQuery.bindEvent('addTodos', 'submit', this.&addTodosSubmit << { it.preventDefault() })
    }

    //<6>
    void setActualTodo(value) {
        actualTodo = value
        start()
        focus('#actualTodo')
    }

    //<7>
    void start() {
        render()
        bindEvents()
    }
}
