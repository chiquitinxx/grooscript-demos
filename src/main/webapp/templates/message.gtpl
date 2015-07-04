def pirateMessages = ['YARRRRR!', 'YO-HO!', 'Ahoy Boys!', 'Surrrrrender the booty!']

li {
    b "${model.name}: "
    if (model.name.toLowerCase().contains('pirate')) {
        def randomNumber = new Random().nextInt(pirateMessages.size())
        yield "${model.msg} ${pirateMessages[randomNumber]}"
    } else {
        yield model.msg
    }
}