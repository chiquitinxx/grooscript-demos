package colors

class MyClass {
    def sayInRed(msg) {
        red(msg)
    }
}

def alone = { cl ->
    println ''
    cl()
    println ''
}

Colors.improve(MyClass)
def myClass = new MyClass()

alone {
    myClass.sayInRed('Hello in Red!')
}

alone {
    myClass.rainbow("Welcome Greach 2014!")
}