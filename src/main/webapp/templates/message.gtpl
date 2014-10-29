def pirateMessages = ['YARRRRR!', 'YO-HO!', 'Ahoy Boys!', 'Surrrrrender the booty!']

li {
    b "${name}: "
    if (name.loLowerCase().contains('pirate')) {
        yield "${msg} ${pirateMessages[new Random().nextInt(pirateMessages.size())]}"
    } else {
        yield msg
    }
}