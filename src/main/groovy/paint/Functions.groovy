package paint

class Functions {

    /**
     * Get bezier point in interval t
     * @param t [0, 1]
     * @param points List of values
     * @return Position at interval
     */
    BigDecimal nBezier(t, List points) {
        def length = points.size() - 1
        points.inject([index: 0, sum: 0]) { acc, value ->
            acc.sum += coef(length, acc.index) * (value - (points[0])) *
                    Math.pow((1 - t), length - acc.index) *
                    Math.pow(t, acc.index)
            acc.index++
            acc
        }.sum + points[0]
    }

    private coef(m, n) {
        if (m == n || n == 0) {
            return 1
        } else {
            return fact(m) / ( fact(n) * fact(m - n ))
        }
    }

    private fact(n) {
        def result
        switch (n) {
            case 2:
                result = 2
                break
            case 3:
                result = 3
                break
            case 4:
                result = 6
                break
            case 5:
                result = 24
                break
            case 6:
                result = 120
                break
            case 7:
                result = 720
                break
            case 8:
                result = 5040
                break
            case 9:
                result = 40320
                break
            case 10:
                result = 362880
                break
            default:
                result = 1
        }
        result
    }
}
