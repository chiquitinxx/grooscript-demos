package firebase

import org.grooscript.asts.GsNative

class BaseFirebase {

    def dataRef

    BaseFirebase(String url) {
        initFirebase(url)
        this.metaClass.methods.each { it ->
            if (it.name.startsWith('on')) {
                def nameProperty = it.name.substring(2).toLowerCase()
                doOnEvent(nameProperty, it.name)
            }
        }
    }

    @GsNative
    void setProperty(String name, value) {/*
        this.dataRef.child(name).set(gs.toJavascript(value));
    */}

    @GsNative
    private initFirebase(String url) {/*
        this.dataRef = new Firebase(url);
    */}

    @GsNative
    private doOnEvent(String name, String nameMethod) {/*
        gSobject.dataRef.child(name).on('value', function(snapshot) {
            gSobject[nameMethod](gs.toGroovy(snapshot.val()));
        });
    */}
}
