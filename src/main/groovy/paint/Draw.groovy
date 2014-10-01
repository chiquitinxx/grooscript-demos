package paint

import org.grooscript.asts.GsNative

class Draw {

    Functions functions = new Functions()
    def r = new Random()
    def colors = [
        [r: 232, g: 51, b: 1],
        [r: 248, g: 179, b: 10],
        [r: 247, g: 239, b: 189],
        [r: 29, g: 16, b: 8],
    ]
    static final PRECISSION = 800
    static final N_GRADES = 9
    def maxWidth = 500
    def maxHeight = 500

    def ctx
    def ctxWidth
    def ctxHeight

    Draw(idCanvas) {
        initCanvas(idCanvas)
    }

    /**
     * Draw random bezier
     * @return
     */
    def random() {
        def points = []

        N_GRADES.times {
            points << [x: r.nextInt(maxWidth), y: r.nextInt(maxHeight)]
        }
        def movex = r.nextInt(ctxWidth)
        def movey = r.nextInt(ctxHeight)
        def finalPoints = points.collect {
            [
                x: it.x - maxWidth / 2 + movex,
                y: it.y - maxHeight / 2 + movey
            ]
        }

        drawBezier(finalPoints)
    }

    private void drawBezier(List points) {
        def xList = points.collect { it.x }
        def yList = points.collect { it.y }
        def color = colors[r.nextInt(4)]
        def width = r.nextInt(30) + 35
        (1..PRECISSION).each { it ->
            def posx = functions.nBezier(it / PRECISSION, xList)
            def posy = functions.nBezier(it / PRECISSION, yList)
            drawCircle(posx, posy, color, it / width)
            //Random drop
            if (r.nextInt(100) > 97) {
                drawCircle(posx + 20, posy + 20, color, it / width / 2)
            }
        }
    }

    @GsNative
    private void initCanvas(name) {/*
        var canvas = document.getElementById(name);
        this.ctxWidth = canvas.width;
        this.ctxHeight = canvas.height;
        this.ctx = canvas.getContext('2d');
    */}

    @GsNative
    private void drawCircle(x, y, color, radius) {/*
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = "rgb("+color.r+", "+color.g+", "+ color.b +")";
        this.ctx.fill();
    */}
}
