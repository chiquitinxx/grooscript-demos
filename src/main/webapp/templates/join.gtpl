li {
    if (name == 'Groovy') {
        img src: 'img/groovy.png', height: 20
        img src: 'img/groovy.png', height: 20
    } else {
        b "${name} "
        yield 'joined the chat!'
    }
}