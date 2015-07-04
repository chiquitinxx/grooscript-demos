li {
    if (model.name.toLowerCase().contains('danveloper')) {
        b '#unfollowdanveloper'
    } else {
        b "${model.name} "
        yield 'left the chat.'
    }
}