package raphael

import org.grooscript.asts.GsNative

/**
 * Created by jorgefrancoleza on 19/1/15.
 */
class Stars {

    static final STARS_NUMBER = 1500

    def context
    def groovyImage
    def grailsImage
    def height
    def width
    def random = new Random()
    def stars = []

    void start(id) {
        initCanvas(id)
        STARS_NUMBER.times {
            def size = (random.nextInt(10) / 10 + 0.5) * 3
            stars << [
                    x: random.nextInt(width),
                    y: random.nextInt(height),
                    speed: size * 3,
                    size: size
            ]
        }
        draw(this.&initAndMove)
    }

    void initAndMove() {
        context.fillStyle = "#000000"
        context.fillRect(0, 0, width, height)
        context.fillStyle = "#FFFFFF"
        stars.each { star ->
            def newX = star.x + star.speed
            if (newX > width) {
                newX = 0
            }
            star.x = newX
            context.fillRect(star.x, star.y, star.size, star.size)
        }
        context.drawImage(groovyImage, width - 210, height -110)
        context.drawImage(grailsImage, 10, height -110, 100, 100)
        context.font = "48px serif"
        context.fillText("Keep on groovy'ing!", width / 2 - 190, height -50)
        context.font = "24px serif"
        context.fillText("While groovy and grails crew looking for a new home...", 50, 60)
    }

    @GsNative
    private draw(closure) {/*
        setInterval(closure, 1000/60);
    */}

    @GsNative
    private initCanvas(id) {/*
        var canvas = document.getElementById(id);
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        gSobject.height = canvas.height;
        gSobject.width = canvas.width;
        gSobject.context = canvas.getContext("2d");

        gSobject.groovyImage = document.getElementById("groovyImage");
        gSobject.grailsImage = document.getElementById("grailsImage");
    */}
}