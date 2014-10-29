li {
    if (name.toLowerCase().contains('danveloper')) {
        b '#unfollowdanveloper'
    } else {
        b "${name} "
        yield 'left the chat.'
    }
}