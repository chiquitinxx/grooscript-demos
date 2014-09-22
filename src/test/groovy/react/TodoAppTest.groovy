package react

/**
 * User: jorgefrancoleza
 * Date: 20/09/14
 */
class TodoAppTest extends GroovyTestCase {

    TodoApp todoApp = new TodoApp()

    void testInit() {
        todoApp.init()
        assert todoApp.actualTodo == ''
        assert todoApp.todos == []
    }

    void testAddTodosSubmit() {
        todoApp.init()
        todoApp.addTodosSubmit()
        assert todoApp.todos == []
        todoApp.actualTodo = 'New'
        todoApp.addTodosSubmit()
        assert todoApp.todos == ['New']
        assert todoApp.actualTodo == ''
    }

    void testActualTodoChange() {
        todoApp.actualTodo = 'initial'
        todoApp.actualTodoChange('final')
        assert todoApp.actualTodo == 'final'
    }
}
