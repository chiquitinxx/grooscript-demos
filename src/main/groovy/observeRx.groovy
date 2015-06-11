import dualrx.GrooscriptObservable

GrooscriptObservable.fromList(["one", "two", "three"])
        .take(2)
        .subscribe({arg -> println(arg)})
