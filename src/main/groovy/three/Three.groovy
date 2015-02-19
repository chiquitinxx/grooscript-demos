package three

import org.grooscript.asts.GsNative

/**
 * Created by jorgefrancoleza on 17/2/15.
 */
class Three {

    def scene, camera, items = [], renderer, actions, material, grooscriptMaterial

    static Three scene(@DelegatesTo(Three) Closure closure) {
        Three three = new Three()
        closure.delegate = three
        three.scene = three.defaultScene
        three.camera = three.defaultCamera
        closure()
        three.renderer = three.defaultRenderer
        three
    }

    void animate(Closure closure) {
        actions = actions ?: closure
        animationFrame this.&animate
        actions(items)
        renderer.render scene, camera
    }

    def methodMissing(String name, args) {
        def mesh = newMesh(name.capitalize(), *args)
        mesh.metaClass.rotateLeft = { ob -> ob.rotation.y -= 0.02 }.curry(mesh)
        mesh.metaClass.moveTo = { ob, x, y, z -> ob.position.set(x, y, z) }.curry(mesh)
        scene.add mesh
        items << mesh
        mesh
    }

    @GsNative
    private getDefaultScene() {/*
        var scene = new THREE.Scene();
        //Default material
        var map = THREE.ImageUtils.loadTexture('img/texture.jpg');
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 16;
        gSobject.material = new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: map, side: THREE.DoubleSide } );
        var grooscriptMap = THREE.ImageUtils.loadTexture('img/logo.png');
        gSobject.grooscriptMaterial = new THREE.MeshLambertMaterial( { ambient: 0xbbbbbb, map: grooscriptMap, side: THREE.DoubleSide } );
        //Light
        scene.add( new THREE.AmbientLight(0xF0F0F0));
        return scene;
    */}

    @GsNative
    private getDefaultCamera() {/*
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;
        return camera;
    */}

    @GsNative
    private getDefaultRenderer() {/*
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        return renderer;
    */}

    @GsNative
    private newMesh(name, ...args) {/*
        var geo = gSobject.construct(THREE[name + 'Geometry'], args);
        var object = new THREE.Mesh(geo, gSobject.material);
        object.name = name;
        object.position.set(0, 0, 0);
        return object;
    */}

    @GsNative
    private void animationFrame(func) {/*
        requestAnimationFrame(func);
    */}

    @GsNative
    private construct(constructor, args) {/*
        function F() {
            return constructor.apply(this, args);
        }
        F.prototype = constructor.prototype;
        return new F();
    */}
}
