package colors

/**
 * User: jorgefrancoleza
 * Date: 07/03/14
 */
class Colors {

    static jsColors = new JsColors()

    static improve(aClass) {
        aClass.metaClass.red = jsColors.&red
        aClass.metaClass.rainbow = jsColors.&rainbow
    }
}
