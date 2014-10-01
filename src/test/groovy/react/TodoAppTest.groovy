package react

import org.grooscript.GrooScript

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

    void testAstAddProperties() {
        assertScript '''
            import org.grooscript.jquery.GQueryImpl

            @react.Component
            class Comp {}

            def comp = new Comp()
            assert comp.gQuery
            assert comp.gQuery instanceof GQueryImpl
            assert comp.selector == null
'''
    }

    void testCreateSetMethodForString() {
        assertScript '''
            import org.grooscript.jquery.GQueryImpl

            @react.Component
            class Comp {
                String name
                boolean calledRender = false

                void render() {
                    calledRender = true
                }
            }

            def comp = new Comp()
            comp.setName('newName')
            assert comp.name == 'newName'
            assert comp.calledRender == true
'''
    }

    void testCreateStartMethod() {
        assertScript '''
            import org.grooscript.jquery.GQueryImpl

            @react.Component
            class Comp {
                String name
                boolean calledRender = false
                boolean initialized = false

                void init() {
                    initialized = true
                }

                void render() {
                    calledRender = true
                }
            }

            def comp = new Comp()
            comp.start('selector')
            assert comp.selector == 'selector'
            assert comp.initialized == true
            assert comp.calledRender == true
'''
    }

    void testCreateMethodRenderIfNotExist() {
        assertScript '''
            import org.grooscript.jquery.GQueryImpl

            @react.Component
            class Comp {
            }

            def comp = new Comp()
            comp.render()
'''
    }

    void testChangeMethodRenderIfAlreadyExists() {
        assertScript '''
            import org.grooscript.jquery.GQueryImpl

            @react.Component
            class Comp {
                void render() {
                    p 'hola'
                }
            }

            def comp = new Comp(selector: 'selector')
            comp.render()
'''
    }

    void testConvertAst() {
        try {
            GrooScript.setConversionProperty('classPath', 'src/main/groovy')
            GrooScript.convert(['src/main/groovy/react/TodoApp.groovy'], '.')
            assert new File('TodoApp.js').text.contains('gSobject.gQuery = GQueryImpl();')
        } finally {
            new File('TodoApp.js')?.delete()
        }
    }
}