package snap

import org.grooscript.asts.GsNative

/**
 * Created by jorgefrancoleza on 23/11/14.
 */
class SnapSvg {

    private snap

    SnapSvg(selector) {
        snap = createSnap(selector)
    }

    Element circle(Map attributes) {
        createElement('circle', attributes)
    }

    Element text(Map attributes) {
        createElement('text', attributes)
    }

    Element rect(Map attributes) {
        createElement('rect', attributes)
    }

    @GsNative
    private createSnap(selector) {/*
        return Snap(selector);
    */}

    @GsNative
    private Element createElement(String name, Map attributes) {/*
        var element = Element();
        var newSnap = this.snap.el(name, gs.toJavascript(attributes));
        for (var ob in element) {
            newSnap[ob] = element[ob];
        }
        return newSnap;
    */}

    @GsNative
    private void repeat(time, closure) {/*
        window.setInterval(closure, time);
    */}

    static snapSvg(String selector, @DelegatesTo(SnapSvg) Closure cl) {
        cl.delegate = new SnapSvg(selector)
        cl()
    }
}

class Element {
    @GsNative
    void setVerticalScale(scale) {/*
        this.transform('scale(1,'+scale+')');
    */}

    @GsNative
    Element rotate(degrees, x, y) {/*
        this.transform('r'+degrees+','+x+','+y);
        return this;
    */}

    @GsNative
    void rotateAndScale(degrees, scale, x, y) {/*
        var t = new Snap.Matrix()
              .rotate(degrees, x, y)
              .scale(1, scale);
        this.transform(t);
    */}

    @GsNative
    Element copy() {/*
        var element = Element();
        var newSnap = this.clone();
        for (var ob in element) {
            newSnap[ob] = element[ob];
        }
        return newSnap;
    */}

    @GsNative
    void setProperty(String name, value) {/*
        if (name == 'verticalScale') {
            this.setVerticalScale(value);
        } else {
            this.attr(gs.toJavascript(gs.map().add(name, value)));
        }
    */}
}
