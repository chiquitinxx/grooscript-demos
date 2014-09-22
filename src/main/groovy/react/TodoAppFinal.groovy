package react

import org.grooscript.asts.GsNative
import org.grooscript.builder.HtmlBuilder
import org.grooscript.jquery.GQuery
import org.grooscript.jquery.GQueryImpl

class TodoAppFinal {
    List<String> todos
    String actualTodo

    GQuery gQuery = new GQueryImpl()
    String selector

    void init() { //<4>
        todos = []
        actualTodo = ''
    }

    void actualTodoChange(actualTodoValue) { //<5>
        setActualTodo(actualTodoValue)
    }

    void addTodoClick() { //<6>
        if (actualTodo) {
            todos << actualTodo
            setActualTodo('')
        }
    }

    void render() {
        gQuery.html(selector, HtmlBuilder.build {
            div {
                h3 'TODO'
                ul {
                    todos.each {
                        li it
                    }
                    li {
                        input(type: 'text', id: 'actualTodo', value: actualTodo)
                        input(type: 'button', id: 'addTodo', value: "Add #${todos.size()}")
                    }
                }
            }
        })
    }

    @GsNative
    def bindInput(selector, closure) {/*
        $(selector).bind('input', function() {
            var currentVal = $(this).val();
            if (closure) { closure(currentVal); };
        });
    */}

    @GsNative
    def focus(selector) {/*
        var input = $(selector);
        var originalValue = input.val();
        input.val('');
        input.blur().focus().val(originalValue);
    */}

    void bindEvents() {
        //gQuery.bindEvent('actualTodo', 'change', this.&actualTodoChange)
        bindInput('#actualTodo', this.&actualTodoChange)
        gQuery.bindEvent('addTodo', 'click', this.&addTodoClick)
    }

    void setActualTodo(value) {
        println 'New actualTodo: '+value
        actualTodo = value
        start()
        focus('#actualTodo')
    }

    void setTodos(value) {
        println 'New todo: '+value
        todos = value
        start()
    }

    void start() {
        render()
        bindEvents()
    }
}
