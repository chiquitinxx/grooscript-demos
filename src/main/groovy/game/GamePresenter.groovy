package game

import org.grooscript.builder.HtmlBuilder

/**
 * User: jorgefrancoleza
 * Date: 15/07/14
 */
class GamePresenter {

    Game game
    def allowMove = true

    def init() {
        game = new Game()
        $('#result').html ''
        drawGame()
    }

    def drawGame() {
        $('#gameTable').html htmlFromGame
    }

    def getHtmlFromGame() {
        HtmlBuilder.build {
            table(class: 'table') {
                game.rows.each { row ->
                    tr {
                        row.each { cell ->
                            td(class: 'cell') {
                                p "${cell.value ?: ''}"
                            }
                        }
                    }
                }
            }
        }
    }

    def move(adress) {
        if (allowMove) {
            game."move${adress.capitalize()}"()
            if (game.isFull()) {
                allowMove = false
                $('#result').html '<h2>You have lost</h2>'
            } else if (game.isDone()) {
                allowMove = false
                $('#result').html '<h2>Congratulations, you have finished!</h2>'
            } else {
                game.addRandomNumber()
            }
            drawGame()
        }
    }
}
