package angular

/**
 * Created by jorgefrancoleza on 1/3/15.
 */
def todoAngular = { $scope ->
    $scope.todos = [
            [text:'learn angular', done: true],
            [text:'build an angular app', done: false]
    ]

    $scope.addTodo = {
        $scope.todos << [text:$scope.todoText, done:false]
        $scope.todoText = ''
    }

    $scope.remaining = {
        $scope.todos.inject(0) { acc, todo ->
            todo.done ? acc + 1 : acc
        }
    }

    $scope.archive = {
        $scope.todos = $scope.todos.findAll { !it.done }
    }
}