def pirateMessages = ['YARRRRR!', 'YO-HO!', 'Ahoy Boys!', 'Surrrrrender the booty!']

li {
    b "${name}: "
    if (name.loLowerCase().contains('pirate')) {
        def randomNumber = new Random().nextInt(pirateMessages.size())
        yield "${msg} ${pirateMessages[randomNumber]}"
    } else {
        yield msg
    }
}