li {
    if (name == 'Groovy') {
        3.times {
            img src: 'img/groovy.png', height: 20
        }
    } else {
        b "${model.name} "
        yield 'joined the chat!'
    }
}