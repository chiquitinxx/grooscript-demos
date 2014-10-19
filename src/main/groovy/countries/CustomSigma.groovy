package countries

import org.grooscript.asts.GsNative

/**
 * User: jorgefrancoleza
 * Date: 19/10/14
 */
class CustomSigma {

    def s

    CustomSigma(String container) {
        init(container)
    }

    @GsNative
    private init(String container) {/*
        this.s = new sigma(container);
        this.s.settings({
          edgeColor: 'default',
          defaultEdgeColor: 'grey'
        });
    */}

    @GsNative
    def refresh() {/*
        this.s.refresh();
    */}

    @GsNative
    def addNode(Map data) {/*
        this.s.graph.addNode({
          // Main attributes:
          id: data.id,
          label: data.label,
          // Display attributes:
          x: data.x * 10,
          y: data.y * (-10),
          size: 1,
          color: data.color
        });
    */}

    @GsNative
    def addEdge(String id, String source, String target) {/*
        this.s.graph.addEdge({
          id: id,
          // Reference extremities:
          source: source,
          target: target
        });
    */}

    def moveCamaraTo(x, y, ratio) {
        s.cameras[0].goTo x:x, y:y, ratio:ratio
    }

    @GsNative
    def moveCamaraToNode(node) {/*
        this.s.cameras[0].goTo({x:node['read_cam0:x'],y:node['read_cam0:y'],ratio:0.300})
    */}

    def applyToNodes(closure) {
        s.graph.nodes().forEach(closure)
    }
}
