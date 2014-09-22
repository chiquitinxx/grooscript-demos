package react

@Component //<1>
class TodoApp {
    List<String> todos //<2>
    String actualTodo //<3>

    void init() { //<4>
        todos = []
        actualTodo = ''
    }

    void actualTodoChange(actualTodoValue) { //<5>
        setActualTodo(actualTodoValue)
    }

    void addTodosSubmit() { //<6>
        if (actualTodo) {
            todos << actualTodo
            setActualTodo('')
        }
    }

    void render() { //<7>
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
    }
}
