package paint

import spock.lang.Specification
import spock.lang.Unroll

/**
 * User: jorgefrancoleza
 * Date: 03/09/14
 */
class FunctionsSpec extends Specification {

    @Unroll
    void 'test n bezier'() {
        given:
        def points = [30, 40, 50, 60, 70]

        expect:
        functions.nBezier(t, points) == expectedResult

        where:
        t   | expectedResult
        0   | 30
        1   | 70
        0.5 | 50
    }

    @Unroll
    void 'test random n bezier'() {
        given:
        def points = [20, 80, 65, 0]

        expect:
        functions.nBezier(t, points) == expectedResult

        where:
        t   | expectedResult
        0   | 20
        1   | 0
        0.5 | 56.875
    }

    private Functions functions = new Functions()
}
