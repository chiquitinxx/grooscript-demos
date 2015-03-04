package three

/**
 * Created by jorgefrancoleza on 17/2/15.
 */

Three.scene {
    tetrahedron 200 moveTo -360, 300, 300
    icosahedron 200 moveTo 360, 200, 300
    sphere 100, 50, 50 moveTo -300, -200, 100
    torus 200, 50, 50, 50 moveTo -300, -200, 100
    ring 20, 200, 50 moveTo 450, -200, 100
    setMaterial(grooscriptMaterial)
    box 200, 200, 200
}.animate { items ->
    items.findAll { it.name != 'Box' }.each {
        it.rotation.x += it.name != 'Torus' ? 0.01 : -0.01
        it.rotation.y += 0.02
    }
    items.findAll { it.name == 'Box' }.each {
        it.rotateLeft()
    }
}