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

    void addTodoClick() { //<6>
        if (actualTodo) {
            setTodos(todos << actualTodo)
            setActualTodo('')
        }
    }

    void render() { //<7>
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
    }
}
