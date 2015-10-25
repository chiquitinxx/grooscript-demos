function Container() {
    this.pieces = [];

    var i, number = Math.ceil(Math.random()*20) + 21;
    for (i = 0; i < number; i++) {
        this.pieces.push({name: "name " + i, value: i})
    }

    this.sum = function() {
        var i, all = 0;
        for (i = 0; i < this.pieces.length; i++) {
            all += this.pieces[i].value;
        }
        return all;
    }
}

function takeTime(closure) {
    var init = new Date();
    closure();
    return (new Date().getTime() - init.getTime());
}

console.log("Sum containers time: " + takeTime(function() {
    var i;
    for (i = 0; i < 5000; i++) {
        var container = new Container();
        container.sum();
    }
}));

/*
console.log("Functional time: " + takeTime(function() {
        var i;
        for (i = 0; i < 500; i++) {
            var container = new Container();
            container.sum();
        }
    500.times {
        def container = new Container()
        container.pieces.
                collect { [doubleName: it.name * 2, value: 1 / (it.value + 1)] }.
                sort { it.value }.
                inject(0) { acc, item -> acc + item.value }
    }
}));
    */