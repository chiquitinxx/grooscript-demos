import firebase.GrooscriptFirebase


def firebase = new GrooscriptFirebase()
def message = [list: [1, 2, 3], number: 5, name: 'grooscript']
$('body').append "<h3>Send message: ${message}</h3>"
firebase.message = message
$('body').append "<h3>Done synchronous!</h3>"