import static snap.SnapSvg.snapSvg

snapSvg('svg') {
    def middle = [x: 150, y: 150]
    circle cx: middle.x, cy: middle.y, r:145, fill: "none", stroke: "#000", strokeWidth: 3
    circle cx: middle.x, cy: middle.y, r:76, fill: "none", stroke: "#000", strokeWidth: 1
    def hourText = text x: middle.x, y: 30, text: "XII", fontSize: '30px', "text-anchor": "middle", fill: "#666"
    hourText.verticalScale = 2.4
    //Numbers
    def romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI']
    11.times { val ->
        def newHour = hourText.copy()
        newHour.text = romanNumbers[val]
        newHour.rotateAndScale(30 * (val + 1), 2.4, middle.x, middle.y)
    }
    //Seconds points
    def secondPoint = circle cx: middle.x, cy: 13, r:3, fill: "black", stroke: "#000"
    59.times { val ->
        secondPoint.copy().rotate(6 * (val + 1), middle.x, middle.y).r = ((val + 1) % 5 ? 2 : 3)
    }
    //Clock hands
    def hours = rect x: middle.x - 2, y: 65, width: 4, height: 85, fill: "#000"
    def minutes = rect x: middle.x - 1, y: 40, width: 2, height: 110, fill: "#000"
    def seconds = rect x: middle.x - 0.5, y: 13, width: 1, height: 150, fill: "red"
    //Refresh each second
    repeat(1000) {
        def nowValues = new Date().format('HH:mm:ss').split(':').collect { it.toInteger() }
        def hour = nowValues[0] % 12
        def minute = nowValues[1]
        hours.rotate((hour * 30) + (minute / 2), middle.x, middle.y)
        minutes.rotate(minute * 6, middle.x, middle.y)
        seconds.rotate(nowValues[2] * 6, middle.x, middle.y)
    }
}
