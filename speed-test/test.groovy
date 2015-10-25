
class Container {
    def pieces = []

    Container() {
        def number = new Random().nextInt(20) + 20
        number.times {
            def piece = [name: "name${it}", value: it]
            pieces << piece
        }
    }

    long sum() {
        pieces.sum { it.value }
    }
}

def takeTime = { closure ->
    def init = new Date()
    closure()
    new Date().time - init.time
}

println "Sum containers time: " + takeTime {
    5000.times {
        def container = new Container()
        container.sum()
    }
}

println "Functional time: " + takeTime {
    500.times {
        def container = new Container()
        container.pieces.
                collect { [doubleName: it.name * 2, value: 1 / (it.value + 1)] }.
                sort { it.value }.
                inject(0) { acc, item -> acc + item.value }
    }
}