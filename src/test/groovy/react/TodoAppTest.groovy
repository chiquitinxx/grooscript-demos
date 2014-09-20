package react

import org.grooscript.jquery.GQuery

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

    void testAddTodoClick() {
        todoApp.init()
        todoApp.addTodoClick()
        assert todoApp.todos == []
        todoApp.actualTodo = 'New'
        todoApp.addTodoClick()
        assert todoApp.todos == ['New']
    }

    void testActualTodoChange() {
        todoApp.actualTodo = 'initial'
        todoApp.actualTodoChange('final')
        assert todoApp.actualTodo == 'final'
    }

    void testHasAstProperties() {
        assert todoApp.gQuery
        assert todoApp.gQuery instanceof GQuery
        assert todoApp._started == false
    }
}
