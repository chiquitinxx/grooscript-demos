package colors

import spock.lang.Specification

/**
 * User: jorgefrancoleza
 * Date: 07/03/14
 */
class ColorsSpec extends Specification {

    class Hello {}

    def jsColors = Mock(JsColors)

    def setup() {
        Colors.jsColors = jsColors
    }

    def 'improve a class with colors'() {
        given:
        Colors.improve(Hello)

        when:
        new Hello().red('Red')
        new Hello().rainbow('Rainbow')

        then:
        1 * jsColors.red('Red')
        1 * jsColors.rainbow('Rainbow')
    }
}
