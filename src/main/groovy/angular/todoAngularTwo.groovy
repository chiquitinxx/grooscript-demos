package angular

/**
 * Created by jorgefrancoleza on 1/3/15.
 */
trait AngularController {

    def scope

    Closure init() {
        { controller, angularScope ->
            controller.scope = angularScope
            controllerProperties(controller).each { nameProperty ->
                angularScope."$nameProperty" = controller."$nameProperty"
            }
            controllerMethods(controller).each { nameMethod ->
                angularScope."$nameMethod" = controller.&"$nameMethod"
            }
        }.curry(this)
    }

    static controllerProperties(controller) {
        controller.properties.findAll { key, value ->
            !(key in ['class', 'scope'])
        }.collect { key, value -> key }
    }

    static controllerMethods(controller) {
        controller.metaClass.methods.findAll { method ->
            !method.name.startsWith('set') && !method.name.startsWith('get') && !method.name.contains('$') &&
                    !(method.name in ['equals', 'hashCode', 'notify', 'notifyAll', 'toString',
                                      'wait', 'controllerMethods', 'controllerProperties', 'init',
                                      'invokeMethod'])
        }.collect { it.name }
    }
}

class TodoController implements AngularController {
    def todos = [
        [text:'learn angular', done: true],
        [text:'build an angular app', done: false]
    ]

    def addTodo() {
        scope.todos << [text: scope.todoText, done: false]
        scope.todoText = ''
    }

    def remaining() {
        scope.todos.count { it.done }
    }

    def archive() {
        scope.todos = todos.findAll { !it.done }
    }
}